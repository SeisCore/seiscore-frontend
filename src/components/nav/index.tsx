'use client'
import { cn } from '@/utils/cn'
import { ChartNoAxesColumn, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathName = usePathname()
  const isAnalyticsActive = pathName === '/analytics'
  const isDashboardActive = pathName === '/'

  return (
    <nav>
      <ul className="flex gap-2">
        <li
          className={cn(
            'text-xs rounded-md border transition-all transition-50',
            isDashboardActive
              ? 'bg-accent-blue/40 border-accent-blue/60'
              : 'bg-accent-blue/20 border-accent-blue/40 hover:bg-accent-blue/30 hover:border-accent-blue/50'
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 uppercase text-accent-blue py-1 px-3"
          >
            <LayoutDashboard size={12} />
            <span>dashboard</span>
          </Link>
        </li>
        <li
          className={cn(
            'text-xs rounded-md border transition-all transition-50',
            isAnalyticsActive
              ? 'bg-accent-purple/40 border-accent-purple/60'
              : 'bg-accent-purple/20 border-accent-purple/40 hover:bg-accent-purple/30 hover:border-accent-purple/50'
          )}
        >
          <Link
            href="/analytics"
            className="flex items-center gap-2 uppercase text-accent-purple py-1 px-3"
          >
            <ChartNoAxesColumn size={12} />
            <span>analytics</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
