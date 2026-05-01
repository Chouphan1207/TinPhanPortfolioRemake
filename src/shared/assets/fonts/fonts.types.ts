// Font family types
export type FontFamily =
  | 'unbounded'
  | 'montserrat'
  | 'primary'
  | 'secondary'
  | 'mono';

// Font weight types (Montserrat weights)
export type FontWeight =
  | 100  // thin
  | 200  // extralight
  | 300  // light
  | 400  // normal
  | 500  // medium
  | 600  // semibold
  | 700  // bold
  | 800  // extrabold
  | 900  // black;

// Font size types
export type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

// Line height types
export type LineHeight =
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose';

// Typography preset types
export type TypographyPreset =
  | 'heading-display'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'body-large'
  | 'body-base'
  | 'body-small'
  | 'caption';

// Font configuration interface
export interface FontConfig {
  family?: FontFamily;
  weight?: FontWeight;
  size?: FontSize;
  lineHeight?: LineHeight;
  preset?: TypographyPreset;
}

// CSS custom properties mapping
export const fontFamilies = {
  unbounded: 'var(--font-family-unbounded)',
  montserrat: 'var(--font-family-montserrat)',
  primary: 'var(--font-family-primary)',
  secondary: 'var(--font-family-secondary)',
  mono: 'var(--font-family-mono)',
} as const;

export const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const fontSizes = {
  xs: 'var(--font-size-xs)',
  sm: 'var(--font-size-sm)',
  base: 'var(--font-size-base)',
  lg: 'var(--font-size-lg)',
  xl: 'var(--font-size-xl)',
  '2xl': 'var(--font-size-2xl)',
  '3xl': 'var(--font-size-3xl)',
  '4xl': 'var(--font-size-4xl)',
  '5xl': 'var(--font-size-5xl)',
  '6xl': 'var(--font-size-6xl)',
  '7xl': 'var(--font-size-7xl)',
  '8xl': 'var(--font-size-8xl)',
  '9xl': 'var(--font-size-9xl)',
} as const;

export const lineHeights = {
  tight: 'var(--line-height-tight)',
  snug: 'var(--line-height-snug)',
  normal: 'var(--line-height-normal)',
  relaxed: 'var(--line-height-relaxed)',
  loose: 'var(--line-height-loose)',
} as const;

export const typographyPresets = {
  'heading-display': {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes['6xl'],
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
  },
  'heading-1': {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes['5xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
  },
  'heading-2': {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes['4xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
  },
  'heading-3': {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
  },
  'heading-4': {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
  },
  'body-large': {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
  },
  'body-base': {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
  },
  'body-small': {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
  },
  'caption': {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
  },
} as const;
