import Nav from '../nav'
import Container from '../wrappers/container'
import Mode from './mode'

export default function Header() {
  return (
    <header className="border-b border-border">
      <Container className="flex justify-between py-4 max-w-10xl w-full mx-auto px-1">
        <div className="uppercase font-bold">
          <p>seiscore</p>
        </div>
        <Container className="flex gap-4">
          <Nav />
          <Mode />
        </Container>
      </Container>
    </header>
  )
}
