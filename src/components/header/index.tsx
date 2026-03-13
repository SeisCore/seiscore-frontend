import Link from 'next/link'
import Nav from '../nav'
import Container from '../wrappers/container'
import SeiscoreLogo from './logo'

export default function Header() {
  return (
    <header className="border-b border-border">
      <Container className="flex justify-between py-4 max-w-10xl w-full mx-auto px-1">
        <div className="uppercase font-bold">
          <Link className="text-text-primary" href="/">
            <SeiscoreLogo />
          </Link>
        </div>
        <Container className="flex gap-4">
          <Nav />
        </Container>
      </Container>
    </header>
  )
}
