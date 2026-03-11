'use client'
import EChartsReact from 'echarts-for-react'
import { echartsBase } from '../config'
import { chartColors } from '../../charts/chart-config'

type Props = {
  data: { hour?: string; day?: string; count: number }[]
}

export default function SeismicEventsPerDay({ data }: Props) {
  const xAxisData = data.map((d) =>
    d.hour
      ? new Date(d.hour).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      : new Date(d.day!).toLocaleDateString([], {
          month: 'short',
          day: 'numeric',
        })
  )
  const seriesData = data.map((d) => d.count)

  const option = {
    ...echartsBase,
    grid: { top: 16, right: 16, bottom: 40, left: 40 },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLine: { lineStyle: { color: chartColors.grid } },
      axisLabel: { color: chartColors.text, fontSize: 11 },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisLabel: { color: chartColors.text, fontSize: 11 },
      splitLine: { lineStyle: { color: chartColors.grid, type: 'dashed' } },
    },
    series: [
      {
        data: seriesData,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { color: chartColors.accent, width: 2 },
        itemStyle: { color: chartColors.accent },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: `${chartColors.accent}33` },
              { offset: 1, color: `${chartColors.accent}00` },
            ],
          },
        },
      },
    ],
  }

  return <EChartsReact option={option} />
}
