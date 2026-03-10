'use client'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { chartColors } from '../chart-colors'

type TopLocation = { place: string; maxMagnitude: number }
type SeverityItem = { severity: string; count: number }
type Props = {
  layout: 'vertical' | 'horizontal'
  data: TopLocation[] | SeverityItem[]
}

const isTopLocation = (d: TopLocation | SeverityItem): d is TopLocation =>
  'place' in d

function getSeverityColor(label: string): string {
  const key = label.toLowerCase() as keyof typeof chartColors.severity
  return chartColors.severity[key] ?? chartColors.blue
}

function getMagnitudeColor(mag: number): string {
  if (mag < 2) return chartColors.magnitudeScale[0]
  if (mag < 3) return chartColors.magnitudeScale[1]
  if (mag < 4) return chartColors.magnitudeScale[2]
  if (mag < 5) return chartColors.magnitudeScale[3]
  if (mag < 6) return chartColors.magnitudeScale[4]
  return chartColors.magnitudeScale[5]
}

const tooltipStyle = {
  contentStyle: {
    background: '#0a1628',
    border: '1px solid #1a2d4a',
    borderRadius: 6,
    color: chartColors.text,
    fontSize: 13,
  },
  labelStyle: { color: chartColors.accent },
  cursor: { fill: 'rgba(255,255,255,0.04)' },
}

export default function SeismicBarChart({ layout, data }: Props) {
  const isSeverity = data.length > 0 && !isTopLocation(data[0])

  const formatted = data.map((d) =>
    isTopLocation(d)
      ? { label: d.place, value: d.maxMagnitude }
      : { label: d.severity, value: d.count }
  )

  return (
    <ResponsiveContainer>
      <BarChart
        data={formatted}
        layout={layout}
        margin={{ top: 4, right: 16, bottom: 24, left: 8 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
        <XAxis
          type={layout === 'horizontal' ? 'category' : 'number'}
          dataKey={layout === 'horizontal' ? 'label' : undefined}
          stroke={chartColors.grid}
          tick={{ fill: chartColors.text, fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          type={layout === 'horizontal' ? 'number' : 'category'}
          dataKey={layout === 'vertical' ? 'label' : undefined}
          width={layout === 'vertical' ? 90 : 40}
          stroke={chartColors.grid}
          tick={{ fill: chartColors.text, fontSize: 12 }}
          tickLine={false}
        />
        <Tooltip {...tooltipStyle} />
        <Bar
          dataKey="value"
          radius={layout === 'horizontal' ? [4, 4, 0, 0] : [0, 4, 4, 0]}
        >
          {formatted.map((entry, i) => (
            <Cell
              key={i}
              fill={
                isSeverity
                  ? getSeverityColor(entry.label)
                  : getMagnitudeColor(entry.value) // ← bruker faktisk magnitude-verdi
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
