'use client'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { chartColors } from '../chart-colors'

type DataPoint = { hour?: string; day?: string; count: number }
type Props = { data: DataPoint[] }

export default function SeismicLineChart({ data }: Props) {
  const formatted = data.map((d) => ({
    label: d.hour
      ? new Date(d.hour).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      : new Date(d.day!).toLocaleDateString([], {
          month: 'short',
          day: 'numeric',
        }),
    count: d.count,
  }))

  return (
    <ResponsiveContainer>
      <LineChart data={formatted}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
        <XAxis
          dataKey="label"
          stroke={chartColors.text}
          tick={{ fill: chartColors.text }}
        />
        <YAxis stroke={chartColors.text} tick={{ fill: chartColors.text }} />
        <Tooltip
          contentStyle={{
            background: '#0a1628',
            border: '1px solid #1a2d4a',
            borderRadius: 6,
            color: chartColors.text,
          }}
        />
        <Line
          dataKey="count"
          type="monotone"
          stroke={chartColors.accent ?? '#38bdf8'}
          strokeWidth={2.5}
          dot={{ fill: '#0a1628', stroke: '#38bdf8', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, fill: '#38bdf8', stroke: '#fff', strokeWidth: 1 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
