import clsx from 'clsx'
import { AnalyticsKpi } from '../../api/fetch-analytics-kpi'

const colorMap = {
  'TOTAL EVENTS': 'text-accent-blue',
  'AVG MAGNITUDE': 'text-accent-amber',
  STRONGEST: 'text-accent-red',
  'AVG DEPTH': 'text-accent-purple',
} as const

type Props = {
  data: AnalyticsKpi
}

export default function AnalyticsKPI({ data }: Props) {
  const mappedItems = [
    { id: 1, title: 'TOTAL EVENTS', value: data.totalEvents.toFixed(0) },
    {
      id: 2,
      title: 'AVG MAGNITUDE',
      value: `M${data.avgMagnitude.toFixed(2)}`,
    },
    { id: 3, title: 'STRONGEST', value: `M${data.maxMagnitude.toFixed(1)}` },
    { id: 4, title: 'AVG DEPTH', value: `${data.avgDepth.toFixed(1)} km` },
  ]
  return (
    <ul className="grid grid-cols-4 gap-2">
      {mappedItems.map((item) => (
        <li
          className="flex flex-col rounded-md border border-border p-4 bg-bg-card"
          key={item.id}
        >
          <span className="flex items-center gap-1 uppercase text-text-muted text-xs">
            {item.title}
          </span>
          <span
            className={clsx(
              'text-2xl font-mono',
              colorMap[item.title.toUpperCase() as keyof typeof colorMap]
            )}
          >
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  )
}
