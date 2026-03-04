'use client'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { chartColors } from '../chart-colors'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
]
type Props = {
  layout: 'vertical' | 'horizontal'
  YAxisType: 'number' | 'category' | 'auto' | undefined
}
export default function SeismicBarChart({ layout, YAxisType }: Props) {
  return (
    <ResponsiveContainer>
      <BarChart data={data} layout={layout}>
        <Tooltip />
        <Legend />
        <XAxis
          type="number"
          stroke={chartColors.text}
          tick={{ fill: chartColors.text }}
        />
        <YAxis
          type={YAxisType}
          dataKey="name"
          stroke={chartColors.text}
          tick={{ fill: chartColors.text }}
        />
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
        <Bar dataKey="pv" stackId="a" fill={chartColors.purple} />
        <Bar dataKey="uv" stackId="a" fill={chartColors.green} />
      </BarChart>
    </ResponsiveContainer>
  )
}
