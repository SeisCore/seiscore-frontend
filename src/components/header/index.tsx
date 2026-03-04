import Nav from '../nav'
import Container from '../wrappers/container'

export default function Header() {
  return (
    <header>
      <Container className="flex justify-between">
        <div className="uppercase">seiscore</div>
        <Container className="flex gap-4">
          <Nav />
          <div>Light/Dark toggle</div>
        </Container>
      </Container>
    </header>
  )
}
