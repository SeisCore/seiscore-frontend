import clsx from 'clsx'
import { Clock, Zap, MapPin, Activity } from 'lucide-react'
import { DashboardKpi } from '../api/fetch-dashboard-kpi'

const colorMap = {
  'last hour': 'text-accent-blue',
  strongest: 'text-accent-red',
  'most active': 'text-accent-purple',
  'total recorded': 'text-accent-green',
} as const

const iconMap = {
  'last hour': Clock,
  strongest: Zap,
  'most active': MapPin,
  'total recorded': Activity,
} as const
type Props = {
  kpi: DashboardKpi
}

function getMagnitudeLabel(value: number): string {
  if (value < 2) return 'Minor'
  if (value < 4) return 'Light'
  if (value < 5) return 'Moderate'
  if (value < 7) return 'Strong'
  return 'Major'
}
export default function DashboardKPI({ kpi }: Props) {
  if (!kpi) return null

  const mappedItems = [
    { title: 'last hour', value: kpi.lastHour, subtitle: 'Seismic events' },
    {
      title: 'strongest',
      value: `M${kpi.strongest.toFixed(1)}`,

      subtitle: getMagnitudeLabel(kpi.strongest),
    },
    {
      title: 'most active',
      value: kpi.mostActiveCount,
      subtitle: kpi.mostActivePlace,
    },
    {
      title: 'total recorded',
      value: kpi.totalRecorded,
      subtitle: 'In session',
    },
  ]

  return (
    <ul className="grid grid-cols-4 gap-3">
      {mappedItems.map((item, idx) => {
        const Icon = iconMap[item.title as keyof typeof iconMap]

        return (
          <li
            className="flex flex-col rounded-md border border-border p-4 bg-bg-card"
            key={idx}
          >
            <span className="flex items-center gap-1 uppercase text-text-muted text-xs">
              <Icon size={12} /> {item.title}
            </span>
            <span
              className={clsx(
                'text-2xl font-mono',
                colorMap[item.title as keyof typeof colorMap]
              )}
            >
              {item.value}
            </span>
            <span className="text-xs text-text-muted">{item.subtitle}</span>
          </li>
        )
      })}
    </ul>
  )
}
