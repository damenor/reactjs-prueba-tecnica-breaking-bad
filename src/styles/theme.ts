const color = {
  primary: '#026635',
  primaryContrast: '#fff',
  secondary: '#85C19D',
  secondaryContrast: '#333',
  dark: '#111',
  grey: '#BDBDBD',
  grey100: '#F5F5F5',
  grey200: '#EEEEEE',
  grey300: '#E0E0E0',
  grey500: '#9E9E9E',
  grey600: '#757575',
  grey700: '#616161',
  light: '#f2f2f2',
  danger: '#ee5253',
  dangerContrast: '#fff',
  info: '#54a0ff',
  infoContrast: '#fff',
  success: '#1dd1a1',
  successContrast: '#fff',
  warning: '#ff9f43',
  warningContrast: '#fff',
  bg: '#101010',
  bgContrast: '#f9f9f9',
  bgSecondary: '#222028',
  bgSecondaryContrast: '#f9f9f9',
}

const fontSizes = {
  xs: '0.8rem',
  s: '0.9rem',
  m: '1rem',
  l: '1.5rem',
  xl: '2.5rem',
  xxl: '4rem',
}

const fontWeights = {
  s: 300,
  m: 400,
  xl: 700
}

const navbar = {
  height: '80px'
}

export const THEME = {
  color,
  fontSizes,
  fontWeights,
  navbar
}

type Theme = typeof THEME
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
