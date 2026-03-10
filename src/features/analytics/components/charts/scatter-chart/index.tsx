'use client'
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from 'recharts'
import { chartColors } from '../chart-colors'

type Props = {
  data: { magnitude: number; depth: number }[]
}

function getMagnitudeColor(mag: number): string {
  const scale = chartColors.magnitudeScale
  if (mag < 1) return scale[0]
  if (mag < 2) return scale[1]
  if (mag < 3) return scale[2]
  if (mag < 4) return scale[3]
  if (mag < 5) return scale[4]
  return scale[5]
}

export default function SeismicScatterChart({ data }: Props) {
  return (
    <ResponsiveContainer>
      <ScatterChart>
        <Tooltip
          cursor={{ strokeDasharray: '3 3', stroke: chartColors.grid }}
          contentStyle={{
            background: '#0a1628',
            border: '1px solid #1a2d4a',
            borderRadius: 6,
            color: chartColors.text,
            fontSize: 13,
          }}
          labelStyle={{ display: 'none' }}
        />
        <CartesianGrid stroke={chartColors.grid} />
        <XAxis
          type="number"
          dataKey="magnitude"
          name="Magnitude"
          label={{
            value: 'Magnitude',
            position: 'insideBottom',
            fill: chartColors.text,
          }}
          stroke={chartColors.text}
          tick={{ fill: chartColors.text }}
        />
        <YAxis
          type="number"
          dataKey="depth"
          name="Depth"
          unit="km"
          stroke={chartColors.text}
          tick={{ fill: chartColors.text }}
        />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            background: '#0a1628',
            border: '1px solid #1a2d4a',
            borderRadius: 6,
            color: chartColors.text,
          }}
        />
        <Scatter data={data}>
          {data.map((entry, i) => (
            <Cell
              key={i}
              fill={getMagnitudeColor(entry.magnitude)}
              opacity={0.8}
            />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  )
}
