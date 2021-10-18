//https://niemvuilaptrinh.medium.com/how-to-create-dropdown-and-15-dropdown-examples-for-website-cd38076ea9c
// https://medium.com/@mariokandut/media-queries-with-styled-components-7a93e4c876f2

import styled from 'styled-components'

import { API_URL_CHARACTERS } from '../constants'
import { useFetch } from '../hooks/useFetch'
import Character from '../components/Character'
import { ICharacter } from '../interfaces/ICharacter'
import Slider from '../components/Slider'
import { mediaQueries } from '../styles'
import { Link } from 'react-router-dom'

const Container = styled.div`
  /* max-width: 1200px; */
  margin: 0 auto;
  
  /* padding: 2rem; */
  padding-top: ${({theme:{navbar}}) => `calc(${navbar.height} + 0)`};
`

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
  /* max-width: 450px; */
  /* margin: 0 auto; */
`

const Home = () => {

  const { data } = useFetch<ICharacter[]>(`${API_URL_CHARACTERS}?limit=${10}`)

  return (
    <Container>
      <WelcomeContainer>
        <WelcomeImage src="images/welcome.png" alt="" />
        <div>
          <h1>Breaking Bad</h1>
          <p>
            Breaking Bad es una serie de televisión dramática estadounidense creada y producida por Vince Gilligan. Narra la historia de Walter White (Bryan Cranston), un profesor de química con problemas económicos a quien le diagnostican un cáncer de pulmón inoperable. Para pagar su tratamiento y asegurar el futuro económico de su familia comienza a cocinar y vender metanfetamina,4​ junto con Jesse Pinkman (Aaron Paul), un antiguo alumno suyo. La serie, ambientada y producida en Albuquerque, Nuevo México, se caracteriza por sus escenarios desérticos y por la tendencia en la historia de poner a sus personajes en situaciones que aparentemente no tienen salida, lo que llevó a que su creador la describa como un wéstern contemporáneo.
          </p>
        </div>
      </WelcomeContainer>
      <Slider.Item>
        { data && data.map((character: ICharacter) => (
          <Link key={character.char_id} to={{ pathname: `/detail/${character.name}`, state: { character } }}>
            <Character {...character} />
          </Link>    
        ))}
      </Slider.Item>
    </Container>
  )
}

export default Home
