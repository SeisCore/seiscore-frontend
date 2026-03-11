'use client'
import EChartsReact from 'echarts-for-react'
import { echartsBase, echartsColors } from '../config'
import { getMagnitudeColor } from '@/utils/magnitude-color'

type Props = {
  data: { magnitude: number; depth: number }[]
}

export default function MagnitudeDepth({ data }: Props) {
  const option = {
    backgroundColor: 'transparent',
    grid: { top: 16, right: 16, bottom: 40, left: 56 },
    xAxis: {
      name: 'Magnitude',
      nameLocation: 'middle',
      nameGap: 28,
      nameTextStyle: { color: echartsColors.text },
      splitLine: { lineStyle: { color: echartsColors.grid } },
      axisLine: { lineStyle: { color: echartsColors.grid } },
      axisLabel: { color: echartsColors.text },
    },
    yAxis: {
      name: 'Depth (km)',
      nameLocation: 'middle',
      nameGap: 44,
      nameTextStyle: { color: echartsColors.text },
      splitLine: { lineStyle: { color: echartsColors.grid } },
      axisLine: { lineStyle: { color: echartsColors.grid } },
      axisLabel: { color: echartsColors.text, formatter: '{value} km' },
    },
    tooltip: {
      ...echartsBase,
      formatter: (params: { value: [number, number] }) =>
        `Magnitude: ${params.value[0].toFixed(1)}<br/>Depth: ${Math.round(params.value[1])} km`,
    },
    series: [
      {
        type: 'scatter',
        symbolSize: 8,
        data: data.map((d) => ({
          value: [d.magnitude, d.depth],
          itemStyle: { color: getMagnitudeColor(d.magnitude), opacity: 0.85 },
        })),
      },
    ],
  }

  return <EChartsReact option={option} />
}
