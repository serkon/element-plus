export const componentSizes = [
  '',
  'default',
  'large',
  'medium',
  'small',
  'mini',
] as const

export type ComponentSize = typeof componentSizes[number]

export const componentSizeMap = {
  default: 40,
  large: 40,
  medium: 36,
  small: 30,
  mini: 28,
} as const
