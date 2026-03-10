import { APIResponse } from '@/features/types'
import { API_URL } from '@/lib/env'

export type ChartData = {
  eventsPerHour: { hour: string; count: number }[]
  eventsPerDay: { day: string; count: number }[]
  severityDistribution: { severity: string; count: number }[]
  topLocations: { place: string; maxMagnitude: number }[]
  magnitudeVsDepth: { magnitude: number; depth: number }[]
}

export async function fetchChartData(): Promise<APIResponse<ChartData>> {
  try {
    const res = await fetch(`${API_URL}/analytics`)
    if (!res.ok) {
      return { ok: false }
    }

    const json = await res.json()
    return { ok: true, data: json }
  } catch {
    return { ok: false }
  }
}
