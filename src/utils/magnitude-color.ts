import { echartsColors } from '@/features/analytics/components/charts/config'

export function getMagnitudeColor(mag: number): string {
  if (mag < 2) return echartsColors.magnitudeScale[0]
  if (mag < 3) return echartsColors.magnitudeScale[1]
  if (mag < 4) return echartsColors.magnitudeScale[2]
  if (mag < 5) return echartsColors.magnitudeScale[3]
  if (mag < 6) return echartsColors.magnitudeScale[4]
  return echartsColors.magnitudeScale[5]
}
