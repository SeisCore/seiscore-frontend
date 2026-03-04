import clsx from 'clsx'

const analyticsItems = [
  { id: 1, title: 'total events', value: '3,360' },
  { id: 2, title: 'avg magnitude', value: 'M2.55' },
  { id: 3, title: 'strongest', value: 'M8.0' },
  { id: 4, title: 'time window', value: '7 Days' },
]

const colorMap = {
  'total events': 'text-accent-blue',
  'avg magnitude': 'text-accent-amber',
  strongest: 'text-accent-red',
  'time window': 'text-accent-purple',
} as const

export default function AnalyticsKPI() {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {analyticsItems.map((item) => (
        <li
          className="flex flex-col rounded-md border border-border p-2 bg-bg-card"
          key={item.id}
        >
          <span className="uppercase text-text-secondary text-xs font-mono">
            {item.title}
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
      ))}
    </ul>
  )
}
