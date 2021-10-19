import styled from 'styled-components'

import { mediaQueries } from '../../../styles'

const SliderContainerButtons = styled.div`
  position: absolute;
  bottom: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 0 1rem;
  button:nth-child(1) {
    transform: rotate(180deg);
  }
  ${mediaQueries('lg')(`
    bottom: 3rem;
    padding: 1rem;
  `)}
`

export default SliderContainerButtons
