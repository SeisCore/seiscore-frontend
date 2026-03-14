import Container from '@/components/wrappers/container'
import { cn } from '@/utils/cn'
import { getSeverityColor } from '@/utils/event-helpers'

export default function SeverityToggle() {
  const severities = [
    { id: 1, label: 'minor', min: 0, max: 2 },
    { id: 2, label: 'light', min: 2.0, max: 4.0 },
    { id: 3, label: 'moderate', min: 4.0, max: 5.0 },
    { id: 4, label: 'strong', min: 5.0, max: 7.0 },
    { id: 5, label: 'major', min: 7.0, max: 999 },
  ]

  const active = 1

  return (
    <Container className="flex items-center gap-1">
      <p className="text-white/40 uppercase text-xs">severity</p>
      <ul className="flex divide-x divide-white/10">
        {severities.map((d) => {
          const isActive = d.id === active
          const color = getSeverityColor(d.min).color
          return (
            <li key={d.id}>
              <button
                className={cn(
                  'uppercase text-xs px-3 py-1 border-b-2 cursor-pointer transition-colors',
                  isActive
                    ? 'text-white'
                    : 'text-white/30 border-transparent hover:text-white/60'
                )}
                style={isActive ? { borderColor: color, color } : undefined}
              >
                {d.label}
              </button>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
