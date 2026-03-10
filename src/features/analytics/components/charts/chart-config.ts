export const chartColors = {
  grid: '#1a2d4a',
  text: '#94a3b8',
  blue: '#38bdf8',
  accent: '#38bdf8',
  severity: {
    minor: '#22c55e',
    light: '#a3e635',
    moderate: '#eab308',
    strong: '#f97316',
    major: '#ef4444',
  },

  magnitudeScale: [
    '#22c55e',
    '#a3e635',
    '#eab308',
    '#f97316',
    '#ef4444',
    '#c026d3',
  ],
}

export const tooltipStyle = {
  contentStyle: {
    background: '#0a1628',
    border: '1px solid #1a2d4a',
    borderRadius: 6,
    color: chartColors.text,
    fontSize: 13,
  },
  labelStyle: { color: chartColors.accent },
  itemStyle: { color: chartColors.text },
  cursor: { fill: 'rgba(2, 1, 1, 0.04)' },
}
