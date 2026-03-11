const scale = [
  {
    id: 1,
    title: 'minor',
    value: '< 2.0',
  },
  {
    id: 2,
    title: 'light',
    value: '2.0-3.9',
  },
  {
    id: 3,
    title: 'moderate',
    value: '4.0-4.9',
  },
  {
    id: 4,
    title: 'strong',
    value: '5.0-6.9',
  },
  {
    id: 5,
    title: 'major',
    value: '7.0+',
  },
]
const colorMap: Record<string, string> = {
  minor: 'var(--color-mag-minor)',
  light: 'var(--color-mag-light)',
  moderate: 'var(--color-mag-moderate)',
  strong: 'var(--color-mag-strong)',
  major: 'var(--color-mag-major)',
}
export default function MagnitudeScale() {
  return (
    <div className="absolute top-5 right-15 z-[1000] bg-bg-card border-gray-200 uppercase p-4 rounded-md text-xs opacity-70">
      <span className="text-text-secondary">magnitude scale</span>

      <ul className="flex flex-col gap-2 py-2">
        {scale.map((s) => (
          <li className="flex items-center justify-between text-xs" key={s.id}>
            <span
              className="w-2 h-2 rounded-full shrink-0 mr-2 shadow-xl"
              style={{ backgroundColor: colorMap[s.title] }}
            />
            <div className="flex items-center justify-between text w-full gap-4">
              <span className="text-text-secondary">{s.title}</span>
              <span className="text-text-muted">{s.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
