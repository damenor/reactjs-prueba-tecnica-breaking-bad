import styled from 'styled-components'

import { mediaQueries } from '../../styles'

const QuotesContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 4rem 1rem;
  padding-top: ${({theme:{navbar}}) => `calc(${navbar.height} + 8rem)`};
  display: grid;

  ${mediaQueries('lg')(`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem
  `)}

`

export default QuotesContainer
