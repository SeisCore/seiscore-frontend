'use client'
import 'leaflet/dist/leaflet.css'
import {
  CircleMarker,
  LayerGroup,
  MapContainer,
  Popup,
  TileLayer,
} from 'react-leaflet'
import { EventsDto } from '../api/fetch-events'
import { getSeverity, getSeverityColor } from '@/utils/event-helpers'
import MagnitudeScale from './scale'

type Props = {
  events: EventsDto[]
}

export default function SeismicMap({ events }: Props) {
  return (
    <div className="h-full w-full relative">
      <MagnitudeScale />
      <MapContainer
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '6px',
          borderColor: 'var(--color-border)',
        }}
        center={[20, 0]}
        zoom={3}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png"
          attribution="© OpenStreetMap © CartoDB"
        />
        <LayerGroup>
          {events.map((event, i) => {
            return (
              <CircleMarker
                center={[event.latitude, event.longitude]}
                key={i}
                pathOptions={getSeverityColor(event.magnitude)}
                radius={Math.max(Math.pow(event.magnitude, 2) * 2, 4)}
                eventHandlers={{
                  mouseover: (e) => e.target.openPopup(),
                  mouseout: (e) => e.target.closePopup(),
                }}
              >
                <Popup>
                  <div className="font-mono bg-bg-card">
                    <p
                      className="text-[0.65rem] font-bold mb-0.5"
                      style={{ color: getSeverityColor(event.magnitude).color }}
                    >
                      M{event.magnitude.toFixed(1)} —{' '}
                      {getSeverity(event.magnitude)}
                    </p>
                    <p className="text-[0.6rem] text-text-muted">
                      {event.place}
                    </p>
                    <p className="text-[0.6rem]">
                      {event.latitude.toFixed(3)}°N,{' '}
                      {event.longitude.toFixed(3)}°E
                    </p>
                    <p className="text-[0.6rem]">
                      Depth: {event.depth.toFixed(1)} km
                    </p>
                    <p className="text-[0.6rem]">
                      {new Date(event.timeUtc).toLocaleTimeString()}
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            )
          })}
        </LayerGroup>
      </MapContainer>
    </div>
  )
}
