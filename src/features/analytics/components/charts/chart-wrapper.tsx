'use client'

import { cn } from '@/utils/cn'

type Props = {
  title: string
  subtitle?: string
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
        'flex flex-col bg-bg-card border border-[#1a2d4a]  rounded-xl p-5 gap-3',
        className
      )}
    >
      <div>
        <p className="text-xs font-mono tracking-widest uppercase text-[#94a3b8]">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs text-[#475569] mt-0.5">{subtitle}</p>
        )}
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  )
}
