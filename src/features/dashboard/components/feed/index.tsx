'use client'
import Container from '@/components/wrappers/container'
import clsx from 'clsx'

const mockEarthquakes = [
  {
    id: 1,
    magnitude: 5.2,
    place: 'Central Apennines, Italy',
    depth: 238.7,
    time: 0,
    severity: 'strong',
  },
  {
    id: 2,
    magnitude: 3.3,
    place: 'Corinth Gulf, Greece',
    depth: 259.7,
    time: 7,
    severity: 'light',
  },
  {
    id: 3,
    magnitude: 4.3,
    place: 'Sicily Channel, Italy',
    depth: 191.5,
    time: 15,
    severity: 'moderate',
  },
  {
    id: 4,
    magnitude: 1.0,
    place: 'Marmara Sea, Turkey',
    depth: 223.1,
    time: 23,
    severity: 'minor',
  },
  {
    id: 5,
    magnitude: 3.0,
    place: 'Corinth Gulf, Greece',
    depth: 243.6,
    time: 30,
    severity: 'light',
  },
]

const severityBadge: Record<string, string> = {
  minor: 'text-mag-minor bg-mag-minor/10',
  light: 'text-mag-light bg-mag-light/10',
  moderate: 'text-mag-moderate bg-mag-moderate/10',
  strong: 'text-mag-strong bg-mag-strong/10',
  major: 'text-mag-major bg-mag-major/10',
}

export default function Feed() {
  return (
    <Container className="w-[35%] flex flex-col bg-bg-card rounded-md border-l border-border ">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="uppercase text-xs font-mono tracking-widest text-text-secondary">
            Live Feed
          </span>
        </div>
        <span className="text-xs font-mono text-text-muted">20 events</span>
      </div>

      <ul className="flex flex-col  overflow-y-auto">
        {mockEarthquakes.map((m, i) => (
          <li
            key={m.id}
            className="flex items-center gap-3 px-4 py-3 border-b border-border hover:bg-bg-secondary transition-colors"
          >
            <div className="flex flex-col items-center justify-center w-14 h-14 rounded-md border border-border shrink-0 font-mono">
              <span className="text-lg font-bold leading-none text-text-primary">
                {m.magnitude}
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
                    severityBadge[m.severity]
                  )}
                >
                  {m.severity}
                </span>
                {i === 0 && (
                  <span className="text-[0.6rem] uppercase font-mono text-accent-green">
                    New
                  </span>
                )}
              </div>
              <span className="text-sm font-mono text-text-primary truncate">
                {m.place}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {m.depth}km depth · {m.time}s ago
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
