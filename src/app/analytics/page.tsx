import Section from '@/components/wrappers/section'
import { fetchAnalyticsKpi } from '@/features/analytics/api/fetch-analytics-kpi'
import { fetchChartData } from '@/features/analytics/api/fetch-chart-data'
import Charts from '@/features/analytics/components/charts'
import Echarts from '@/features/analytics/components/echarts'
import AnalyticsKPI from '@/features/analytics/components/kpi'

export default async function Page() {
  const data = await fetchChartData()
  const kpiData = await fetchAnalyticsKpi()
  if (!data.ok) return null
  if (!kpiData.ok) return null
  return (
    <Section className="flex flex-col gap-5 py-2">
      <AnalyticsKPI data={kpiData.data} />
      <Echarts data={data.data} />
    </Section>
  )
}
