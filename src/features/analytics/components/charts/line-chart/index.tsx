'use client'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { chartColors } from '../chart-colors'

export default function SeismicLineChart() {
  const data = [
    {
      name: 'Page A',
      value: 400,
    },
    {
      name: 'Page B',
      value: 400,
    },
    {
      name: 'Page C',
      value: 400,
    },
    {
      name: 'Page D',
      value: 40500,
    },
    {
      name: 'Page E',
      value: 400,
    },
    {
      name: 'Page F',
      value: 400,
    },
  ]

  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis />
        <YAxis />
        <Line
          dataKey="value"
          type="monotone"
          stroke={chartColors.blue}
          strokeWidth={2}
          dot={{ fill: chartColors.blue }}
        />
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
        <XAxis stroke={chartColors.text} tick={{ fill: chartColors.text }} />
        <YAxis stroke={chartColors.text} tick={{ fill: chartColors.text }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
