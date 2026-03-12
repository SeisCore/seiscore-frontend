import { APIResponse } from '@/features/types'
import { API_URL } from '@/lib/env'

export type EventsDto = {
  id: string
  magnitude: number
  place: string
  timeUtc: string
  updatedUtc: string
  latitude: number
  longitude: number
  depth: number
  status: string
}

export async function fetchEvents(): Promise<APIResponse<EventsDto[]>> {
  try {
    const res = await fetch(`${API_URL}/events`, {
      cache: 'no-cache',
    })

    if (res.status !== 200) {
      return { ok: false }
    }

    const json = await res.json()
    return { ok: true, data: json }
  } catch {
    return { ok: false }
  }
}
