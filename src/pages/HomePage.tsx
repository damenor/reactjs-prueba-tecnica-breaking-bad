//https://niemvuilaptrinh.medium.com/how-to-create-dropdown-and-15-dropdown-examples-for-website-cd38076ea9c
// https://medium.com/@mariokandut/media-queries-with-styled-components-7a93e4c876f2

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { API_URL_CHARACTERS } from '../constants'
import Character from '../components/Character'
import HomeWelcome from '../components/Home/HomeWelcome'
import Slider from '../components/common/Slider'
import { useFetch } from '../hooks/utils/useFetch'
import { ICharacter } from '../interfaces/ICharacter'
import { useAppContext } from '../hooks/contexts/useAppContext'

const Container = styled.div`
  /* max-width: 1200px; */
  margin: 0 auto;
  
  /* padding: 2rem; */
  padding-top: ${({theme:{navbar}}) => `calc(${navbar.height} + 0)`};
`

const HomePage = () => {

  const { data } = useFetch<ICharacter[]>(`${API_URL_CHARACTERS}?limit=${10}`)

  const context = useAppContext()

  console.log({context})

  return (
    <Container>
      <HomeWelcome />
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

export default HomePage
