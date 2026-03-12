'use client'
import Container from '@/components/wrappers/container'
import clsx from 'clsx'
import { EventsDto } from '../api/fetch-events'
import { formatTime, getSeverity } from '@/utils/event-helpers'

const severityBadge: Record<string, string> = {
  minor: 'text-mag-minor bg-mag-minor/10',
  light: 'text-mag-light bg-mag-light/10',
  moderate: 'text-mag-moderate bg-mag-moderate/10',
  strong: 'text-mag-strong bg-mag-strong/10',
  major: 'text-mag-major bg-mag-major/10',
}
type Props = {
  events: EventsDto[]
}
export default function Feed({ events }: Props) {
  return (
    <Container className="w-[35%] flex flex-col bg-bg-card rounded-md border-l border-border">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="uppercase text-xs font-mono tracking-widest text-text-secondary">
            Recent Events
          </span>
        </div>
        <span className="text-xs font-mono text-text-muted">
          {events.length} events
        </span>
      </div>

      <ul className="flex flex-col overflow-y-auto">
        {events.map((event, i) => (
          <li
            key={event.id}
            className="flex items-center gap-3 px-4 py-3 border-b border-border hover:bg-bg-secondary transition-colors"
          >
            <div className="flex flex-col items-center justify-center w-14 h-14 rounded-md border border-border shrink-0 font-mono">
              <span className="text-lg font-bold leading-none text-text-primary">
                {event.magnitude.toFixed(1)}
              </span>
              <span className="text-[0.5rem] uppercase tracking-widest text-text-muted">
                mag
              </span>
            </div>

            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className={clsx(
                    'text-[0.6rem] uppercase font-mono font-bold px-1.5 py-0.5 rounded',
                    severityBadge[getSeverity(event.magnitude)]
                  )}
                >
                  {getSeverity(event.magnitude)}
                </span>
                {i === 0 && (
                  <span className="text-[0.6rem] uppercase font-mono text-accent-green">
                    New
                  </span>
                )}
              </div>
              <span className="text-sm font-mono text-text-primary truncate">
                {event.place}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {event.depth.toFixed(1)}km depth · {formatTime(event.timeUtc)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
