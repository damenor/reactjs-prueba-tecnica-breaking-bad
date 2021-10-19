import styled from 'styled-components'

import { useAppContext } from '../../hooks/contexts/useAppContext'
import { mediaQueries } from '../../styles'

const WelcomeContainer = styled.div`
  max-width: 1200px;
  min-height: 70vh;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 6rem;
  gap: 2rem;

  ${mediaQueries('lg')(`
    display: flex;
    align-items: center;
    padding: 8rem 4rem;
  `)}
  
  color: ${({theme:{color}}) => color.grey};
  h1 {
    font-size: 2.5rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`

const WelcomeImage = styled.img`
  width: 100%;
`

const HomeWelcome = () => {

  const { labels:{ serie_description } } = useAppContext()

  return (
    <WelcomeContainer>
      <WelcomeImage src="images/welcome.png" alt="image walter white"/>
      <div>
        <h1>Breaking Bad</h1>
        <p>{ serie_description }</p>
      </div>
    </WelcomeContainer>
  )
}

export default HomeWelcome
