import { THEME } from './../theme'

export const CSSBackgroundGradient = (color: typeof THEME.color) => (`
  background: rgba(32, 32, 32, 0.75);
  background: linear-gradient(0deg, ${color.bg} 5%, rgba(39,106,86,0.35) 50%, rgba(32, 32, 32, 0.8) 90%, ${color.bg} 100%);
`)
