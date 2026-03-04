import { cn } from '@/utils/cn'

type Props = {
  children: React.ReactNode
  className?: string
}
export default function Container({ children, className }: Props) {
  return <div className={cn(className)}>{children}</div>
}
