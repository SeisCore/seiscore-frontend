'use client'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const scale = [
  {
    id: 1,
    title: 'minor',
    value: '< 2.0',
  },
  {
    id: 2,
    title: 'light',
    value: '2.0-3.9',
  },
  {
    id: 3,
    title: 'moderate',
    value: '4.0-4.9',
  },
  {
    id: 4,
    title: 'strong',
    value: '5.0-6.9',
  },
  {
    id: 5,
    title: 'major',
    value: '7.0+',
  },
]
export default function SeismicMap() {
  const colorMap: Record<string, string> = {
    minor: 'var(--color-mag-minor)',
    light: 'var(--color-mag-light)',
    moderate: 'var(--color-mag-moderate)',
    strong: 'var(--color-mag-strong)',
    major: 'var(--color-mag-major)',
  }

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-5 left-15 z-[1000] bg-bg-card border-gray-200 uppercase p-4 rounded-md text-xs">
        <span className="text-text-secondary">magnitude scale</span>

        <ul className="flex flex-col gap-2 py-2">
          {scale.map((s) => (
            <li
              className="flex items-center justify-between text-xs"
              key={s.id}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0 mr-2 shadow-xl"
                style={{ backgroundColor: colorMap[s.title] }}
              />
              <div className="flex items-center justify-between text w-full gap-4">
                <span>{s.title}</span>
                <span className="text-text-muted">{s.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <MapContainer
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '6px',
          borderColor: 'var(--color-border)',
        }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="© OpenStreetMap © CartoDB"
        />

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
