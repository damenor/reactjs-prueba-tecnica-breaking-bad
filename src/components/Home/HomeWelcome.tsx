import styled from 'styled-components'

import { useAppContext } from '../../hooks/contexts/useAppContext'
import { mediaQueries } from '../../styles'
import Article from '../common/Article'

const WelcomeContainer = styled.section`
  max-width: 1200px;
  min-height: 70vh;
  margin: 0 auto;
  padding: 2rem 0;
  padding-top: 6rem;
  gap: 2rem;

  ${mediaQueries('lg')(`
    display: flex;
    align-items: center;
    padding: 8rem 4rem;
  `)}
`

const WelcomeImage = styled.img`
  width: 100%;
`

const HomeWelcome = () => {

  const { labels:{ description_original } } = useAppContext()

  return (
    <WelcomeContainer>
      <WelcomeImage src="images/welcome.png" alt="image walter white"/>
      <Article title="Breaking Bad" paragraph={description_original}/>
    </WelcomeContainer>
  )
}

export default HomeWelcome
