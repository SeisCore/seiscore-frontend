'use client'
import EChartsReact from 'echarts-for-react'
import { echartsBase } from '../config'
import { chartColors } from '../../charts/chart-config'

type Props = {
  data: { severity: string; count: number }[]
}

export default function SeverityDistribution({ data }: Props) {
  const option = {
    ...echartsBase,
    grid: { top: 8, right: 24, bottom: 8, left: 80, containLabel: false },
    xAxis: {
      type: 'value',
      axisLabel: { color: chartColors.text, fontSize: 11 },
      axisLine: { show: false },
      splitLine: { lineStyle: { color: chartColors.grid, type: 'dashed' } },
    },
    yAxis: {
      type: 'category',
      data: data.map((d) => d.severity),
      axisLabel: { color: chartColors.text, fontSize: 12 },
      axisLine: { lineStyle: { color: chartColors.grid } },
      splitLine: { show: false },
    },
    series: [
      {
        type: 'bar',
        data: data.map((d) => ({
          value: d.count,
          itemStyle: {
            color:
              chartColors.severity[
                d.severity.toLowerCase() as keyof typeof chartColors.severity
              ] ?? chartColors.blue,
            borderRadius: [0, 4, 4, 0],
          },
        })),
      },
    ],
  }

  return <EChartsReact option={option} />
}
