const navItems = [{ id: 1, label: 'historical', href: '' }]
export default function Nav() {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </nav>
  )
}
