import Container from '@/components/wrappers/container'
import SeismicLineChart from './line-chart'
import ChartWrapper from './chart-wrapper'

import SeismicBarChart from './bar-chart'
import SeismicScatterChart from './scatter-chart'

export default function Charts() {
  return (
    <Container className="grid grid-cols-2 h-screen gap-2">
      <ChartWrapper
        title="Seismic Events Per Hour"
        subtitle="Average events per hour, grouped by day — last 7 days"
      >
        <SeismicLineChart />
      </ChartWrapper>

      <ChartWrapper
        title="Most Active Regions"
        subtitle="Total events by region — last 7 days (top 10)"
      >
        <SeismicBarChart layout="horizontal" YAxisType="auto" />
      </ChartWrapper>

      <ChartWrapper
        title="Severity Distribution"
        subtitle="Event count by severity class per day — last 7 days"
      >
        <SeismicBarChart layout="vertical" YAxisType="auto" />
      </ChartWrapper>

      <ChartWrapper
        title="Events Over Magnitude 4.0"
        subtitle="Daily count of significant seismic events — last 7 days"
      >
        <SeismicBarChart layout="vertical" YAxisType="auto" />
      </ChartWrapper>

      <ChartWrapper
        className="col-span-2"
        title="Magnitude vs Depth"
        subtitle="Scatter plot of magnitude against depth — last 7 days"
      >
        <SeismicScatterChart />
      </ChartWrapper>
    </Container>
  )
}
