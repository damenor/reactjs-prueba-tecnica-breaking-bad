import { createGlobalStyle } from 'styled-components'

type BreakpointsType = 'xs' | 'sm' | 'lg' | 'xl'

const BREAKPOINTS: { [key: string]: string } = {
  xs: `576px`,
  sm: `768px`,
  lg: `992px`,
  xl: '1200px'
}

export const mediaQueries = (key: BreakpointsType) => {
  console.log(typeof key)
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

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .carousel-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .carousel-wrapper {
    display: flex;
    width: 100%;
    position: relative;
  }

  .carousel-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .carousel-content {
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
    scrollbar-width: none;  /* hide scrollbar in Firefox */
  }

  /* hide scrollbar in webkit browser */
  .carousel-content::-webkit-scrollbar, .carousel-content::-webkit-scrollbar {
    display: none;
  }

  .carousel-content > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .carousel-content.show-2 > * {
    width: 50%;
  }

  .carousel-content.show-3 > * {
    width: calc(100% / 3);
  }

  .carousel-content.show-4 > * {
    width: calc(100% / 4);
  }

  .left-arrow, .right-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: white;
    border: 1px solid #ddd;
  }

  .left-arrow {
    left: 24px;
  }

  .right-arrow {
    right: 24px;
  }

  @media (hover: none) and (pointer: coarse) {
    .left-arrow, .right-arrow {
        display: none;
    }
  }

`
