import { APIResponse } from '@/features/types'
import { API_URL } from '@/lib/env'

export type DashboardKpi = {
  lastHour: number
  strongest: number
  mostActivePlace: string
  mostActiveCount: number
  totalRecorded: number
} | null

export async function fetchDashboardKpi(): Promise<APIResponse<DashboardKpi>> {
  try {
    const res = await fetch(`${API_URL}/dashboard/kpi`, {
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
