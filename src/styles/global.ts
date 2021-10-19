import { createGlobalStyle } from 'styled-components'

type BreakpointsType = 'xs' | 'sm' | 'lg' | 'xl'

const BREAKPOINTS: { [key: string]: string } = {
  xs: `576px`,
  sm: `768px`,
  lg: `992px`,
  xl: '1200px'
}

export const mediaQueries = (key: BreakpointsType) => {
  return (style: string) =>
    `@media (min-width: ${BREAKPOINTS[key]}) { ${style} }`
}

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;900&display=swap');

  * {
    box-sizing: border-box;
  }

  *::active,
  *:focus {
    outline: none;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    color: ${({ theme }) => theme.color.bgContrast};
    font-family: 'Raleway', sans-serif;
    background-color: ${({ theme }) => theme.color.bg};
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.secondary};
    border-radius: 12px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  /* h1, h2, h3, h4, h5, h6 {
    margin: 0;
  } */

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:active {
      transform: scale(0.96);
    }
  }

`
