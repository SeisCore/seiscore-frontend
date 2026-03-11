'use client'
import EChartsReact from 'echarts-for-react'
import { echartsBase, echartsColors } from '../config'

type Props = {
  data: { magnitude: number; depth: number }[]
}

function getMagnitudeColor(mag: number): string {
  if (mag < 2) return echartsColors.magnitudeScale[0]
  if (mag < 3) return echartsColors.magnitudeScale[1]
  if (mag < 4) return echartsColors.magnitudeScale[2]
  if (mag < 5) return echartsColors.magnitudeScale[3]
  if (mag < 6) return echartsColors.magnitudeScale[4]
  return echartsColors.magnitudeScale[5]
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
