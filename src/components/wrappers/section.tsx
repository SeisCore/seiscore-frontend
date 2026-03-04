import { cn } from '@/utils/cn'

type Props = {
  children: React.ReactNode
  className?: string
}
export default function Section({ children, className }: Props) {
  return (
    <div className={cn(className, 'max-w-10xl w-full mx-auto px-1')}>
      {children}
    </div>
  )
}
