import styled from 'styled-components'

import { mediaQueries } from '../../styles'

const CharacterDetailContent = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  padding: 1rem;
  h2 {
    font-size: 3rem;
    margin: 0;
    margin-top: 2rem;
  }
  h3 {
    margin: 0;
    font-size: 2rem;
  }
  ${mediaQueries('lg')(`
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  `)}
`

export default CharacterDetailContent
