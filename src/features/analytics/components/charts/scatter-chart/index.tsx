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
import { chartColors, tooltipStyle } from '../chart-config'

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
        <Tooltip {...tooltipStyle} />
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
        <Tooltip {...tooltipStyle} />
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
