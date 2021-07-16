enum DeviceSize {
  lg = 1200,
  md = 996,
  sm = 768,
  xs = 480,
}

export const device = {
  lg: `(min-width: ${DeviceSize.lg})`,
  md: `(min-width: ${DeviceSize.md})`,
  sm: `(min-width: ${DeviceSize.sm})`,
  xs: `(min-width: ${DeviceSize.xs})`,
} as const;
