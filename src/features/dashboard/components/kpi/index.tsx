import clsx from 'clsx'
import { Clock, Zap, MapPin, Activity } from 'lucide-react'
const items = [
  {
    icon: Clock,
    id: 1,
    title: 'last hour',
    value: 50,
  },
  {
    id: 2,
    title: 'strongest',
    value: 2.7,
  },
  {
    id: 3,
    title: 'most active',
    value: 13,
  },
  {
    id: 4,
    title: 'total recorded',
    value: 122,
  },
]
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
export default function KPI() {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {items.map((item) => {
        const Icon = iconMap[item.title as keyof typeof iconMap]

        return (
          <li
            className="flex flex-col rounded-md border border-border p-2 bg-bg-card"
            key={item.id}
          >
            <span className="flex items-center gap-1 uppercase text-text-secondary text-xs">
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
          </li>
        )
      })}
    </ul>
  )
}
