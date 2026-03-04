import { Moon, Sun } from 'lucide-react'
export default function Mode() {
  return (
    <button className="flex items-center gap-1 text-xs bg-bg-card py-1 px-2 rounded-md border border-border cursor-pointer text-text-secondary">
      <Moon size={12} />
      <span className="uppercase">dark</span>
    </button>
  )
}
