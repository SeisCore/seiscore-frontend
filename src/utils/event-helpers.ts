export function getSeverity(magnitude: number): string {
  if (magnitude < 2.0) return 'minor'
  if (magnitude < 4.0) return 'light'
  if (magnitude < 5.0) return 'moderate'
  if (magnitude < 7.0) return 'strong'
  return 'major'
}
export function getSeverityColor(magnitude: number) {
  if (magnitude < 2.0)
    return { color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.5 }
  if (magnitude < 4.0)
    return { color: '#eab308', fillColor: '#eab308', fillOpacity: 0.5 }
  if (magnitude < 5.0)
    return { color: '#f97316', fillColor: '#f97316', fillOpacity: 0.5 }
  if (magnitude < 7.0)
    return { color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.5 }
  return { color: '#991b1b', fillColor: '#991b1b', fillOpacity: 0.7 }
}

export function formatTime(timeUtc: string): string {
  const diff = Math.floor((Date.now() - new Date(timeUtc).getTime()) / 1000)
  if (diff < 60) return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  return `${Math.floor(diff / 3600)}h ago`
}
