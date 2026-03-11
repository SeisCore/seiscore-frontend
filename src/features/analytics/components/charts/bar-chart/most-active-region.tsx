'use client'
import EChartsReact from 'echarts-for-react'
import { echartsBase, echartsColors } from '../config'

type Props = {
  data: { place: string; maxMagnitude: number }[]
}

function getMagnitudeColor(mag: number): string {
  if (mag < 2) return echartsColors.magnitudeScale[0]
  if (mag < 3) return echartsColors.magnitudeScale[1]
  if (mag < 4) return echartsColors.magnitudeScale[2]
  if (mag < 5) return echartsColors.magnitudeScale[3]
  if (mag < 6) return echartsColors.magnitudeScale[4]
  return echartsColors.magnitudeScale[5]
}

export default function MostActiveRegion({ data }: Props) {
  const option = {
    ...echartsBase,
    grid: { top: 16, right: 16, bottom: 60, left: 16, containLabel: true },
    xAxis: {
      type: 'category',
      data: data.map((d) => d.place),
      axisLine: { lineStyle: { color: echartsColors.grid } },
      axisLabel: {
        color: echartsColors.text,
        fontSize: 10,
        interval: 0,
        overflow: 'truncate',
        width: 80,
      },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisLabel: { color: echartsColors.text, fontSize: 11 },
      splitLine: { lineStyle: { color: echartsColors.grid, type: 'dashed' } },
    },
    series: [
      {
        type: 'bar',
        data: data.map((d) => ({
          value: d.maxMagnitude,
          itemStyle: {
            color: getMagnitudeColor(d.maxMagnitude),
            borderRadius: [4, 4, 0, 0],
          },
        })),
      },
    ],
  }

  return <EChartsReact option={option} />
}
