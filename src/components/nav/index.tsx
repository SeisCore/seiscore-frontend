import { ChartNoAxesColumn } from 'lucide-react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="text-xs bg-accent-purple/20  rounded-md border border-accent-purple/40">
          <Link
            href="historical"
            className="flex items-center gap-2 uppercase text-accent-purple py-1 px-3"
          >
            <ChartNoAxesColumn size={12} />
            <span> historical</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
