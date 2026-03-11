'use client'
import EChartsReact from 'echarts-for-react'
import { echartsBase, echartsColors } from '../config'

type Props = {
  data: { severity: string; count: number }[]
}

export default function SeverityDistribution({ data }: Props) {
  const option = {
    ...echartsBase,
    grid: { top: 8, right: 24, bottom: 8, left: 80, containLabel: false },
    xAxis: {
      type: 'value',
      axisLabel: { color: echartsColors.text, fontSize: 11 },
      axisLine: { show: false },
      splitLine: { lineStyle: { color: echartsColors.grid, type: 'dashed' } },
    },
    yAxis: {
      type: 'category',
      data: data.map((d) => d.severity),
      axisLabel: { color: echartsColors.text, fontSize: 12 },
      axisLine: { lineStyle: { color: echartsColors.grid } },
      splitLine: { show: false },
    },
    series: [
      {
        type: 'bar',
        data: data.map((d) => ({
          value: d.count,
          itemStyle: {
            color:
              echartsColors.severity[
                d.severity.toLowerCase() as keyof typeof echartsColors.severity
              ] ?? echartsColors.blue,
            borderRadius: [0, 4, 4, 0],
          },
        })),
      },
    ],
  }

  return <EChartsReact option={option} />
}
