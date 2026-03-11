import Container from '@/components/wrappers/container'
import { ChartData } from '../../api/fetch-chart-data'
import SeismicEventsPerHour from './line-chart/seismic-events-per-hour'
import SeismicEventsPerDay from './line-chart/seismic-events-per-day'
import SeverityDistribution from './bar-chart/severity-distribution'
import MostActiveRegion from './bar-chart/most-active-region'
import MagnitudeDepth from './scatter-chart'
import ChartWrapper from './chart-wrapper'

type Props = {
  data: ChartData
}
export default function Charts({ data }: Props) {
  return (
    <Container className="grid grid-cols-2 h-screen gap-x-2 gap-y-4">
      <ChartWrapper
        title="Seismic events per day"
        subtitle="Average events per day"
      >
        <SeismicEventsPerDay data={data.eventsPerDay} />
      </ChartWrapper>
      <ChartWrapper
        title="Seismic events per hour"
        subtitle="Average events per hour"
      >
        <SeismicEventsPerHour data={data.eventsPerHour} />
      </ChartWrapper>
      <ChartWrapper
        title="Severity Distribution"
        subtitle="Event count by severity"
      >
        <SeverityDistribution data={data.severityDistribution} />
      </ChartWrapper>
      <ChartWrapper
        title="Most Active Regions"
        subtitle="Total events by region"
      >
        <MostActiveRegion data={data.topLocations} />
      </ChartWrapper>
      <ChartWrapper
        className="col-span-2"
        title="Magnitude vs Depth"
        subtitle="Scatter plot of magnitude against depth"
      >
        <MagnitudeDepth data={data.magnitudeVsDepth} />
      </ChartWrapper>
    </Container>
  )
}
