import Nav from '../nav'
import Container from '../wrappers/container'

export default function Header() {
  return (
    <header className="border-b border-gray-200 mb-10">
      <Container className="flex justify-between py-4">
        <div className="uppercase">seiscore</div>
        <Container className="flex gap-4">
          <Nav />
          <div>Light/Dark toggle</div>
        </Container>
      </Container>
    </header>
  )
}
