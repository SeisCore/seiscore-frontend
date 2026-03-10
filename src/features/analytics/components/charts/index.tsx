import Container from '@/components/wrappers/container'
import SeismicLineChart from './line-chart'
import ChartWrapper from './chart-wrapper'
import SeismicBarChart from './bar-chart'
import SeismicScatterChart from './scatter-chart'
import { ChartData } from '../../api/fetch-chart-data'

type Props = {
  data: ChartData
}

export default function Charts({ data }: Props) {
  return (
    <Container className="grid grid-cols-2 h-screen gap-2">
      <ChartWrapper
        title="Seismic Events Per Hour"
        subtitle="Events per hour — last 24 hours"
      >
        <SeismicLineChart data={data.eventsPerHour} />
      </ChartWrapper>

      <ChartWrapper
        title="Most Active Regions"
        subtitle="Top 10 locations by highest magnitude"
      >
        <SeismicBarChart layout="horizontal" data={data.topLocations} />
      </ChartWrapper>

      <ChartWrapper
        title="Severity Distribution"
        subtitle="Total events by severity class"
      >
        <SeismicBarChart layout="vertical" data={data.severityDistribution} />
      </ChartWrapper>

      <ChartWrapper
        title="Events Per Day"
        subtitle="Daily event count — last 30 days"
      >
        <SeismicLineChart data={data.eventsPerDay} />
      </ChartWrapper>

      <ChartWrapper
        className="col-span-2"
        title="Magnitude vs Depth"
        subtitle="Scatter plot of magnitude against depth"
      >
        <SeismicScatterChart data={data.magnitudeVsDepth} />
      </ChartWrapper>
    </Container>
  )
}
