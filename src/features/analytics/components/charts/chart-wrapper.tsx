import { cn } from '@/utils/cn'

type Props = {
  title: string
  subtitle: string
  children: React.ReactNode
  className?: string
}
export default function ChartWrapper({
  title,
  subtitle,
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        className,
        'bg-bg-card border border-border rounded-md  flex flex-col gap-2 px-4 pb-4 pt-2'
      )}
    >
      <div>
        <p className="text-xs uppercase font-mono tracking-widest text-text-secondary">
          {title}
        </p>
        <p className="text-xs text-text-muted font-mono">{subtitle}</p>
      </div>
      <div className="grow min-h-0">{children}</div>
    </div>
  )
}
