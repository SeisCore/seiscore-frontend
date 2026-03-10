import { APIResponse } from '@/features/types'
import { API_URL } from '@/lib/env'

export type AnalyticsKpi = {
  totalEvents: number
  avgMagnitude: number
  maxMagnitude: number
  avgDepth: number
}

export async function fetchAnalyticsKpi(): Promise<APIResponse<AnalyticsKpi>> {
  try {
    const res = await fetch(`${API_URL}/analytics/kpi`, {
      cache: 'no-cache',
    })

    if (!res.ok) return { ok: false }
    const json = await res.json()
    return { ok: true, data: json }
  } catch {
    return { ok: false }
  }
}
