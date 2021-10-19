import { THEME } from './../theme'
import { CSSBackgroundGradient } from './CSSBackgroundGradient'

export const CSSBeforeGradient = ({ color }: typeof THEME) => (`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    ${CSSBackgroundGradient(color)}
  }
`)