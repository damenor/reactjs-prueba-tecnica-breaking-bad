//https://niemvuilaptrinh.medium.com/how-to-create-dropdown-and-15-dropdown-examples-for-website-cd38076ea9c
// https://medium.com/@mariokandut/media-queries-with-styled-components-7a93e4c876f2

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Character from '../components/Character'
import HomeWelcome from '../components/Home/HomeWelcome'
import Slider from '../components/common/Slider'
import { ICharacter } from '../interfaces/ICharacter'
import { useAppContext } from '../hooks/contexts/useAppContext'
import { useEffect } from 'react'

const Container = styled.div`
  /* max-width: 1200px; */
  margin: 0 auto;
  
  /* padding: 2rem; */
  padding-top: ${({theme:{navbar}}) => `calc(${navbar.height} + 0)`};
`

const HomePage = () => {

  const { characters } = useAppContext()
  
  return (
    <Container>
      <HomeWelcome />
      <Slider.Item>
        { characters.map((character: ICharacter, index) => {
          if(index > 10) return null
          return (
            <Link key={character.char_id} to={{ pathname: `/character/${character.name}`, state: { character } }}>
              <Character {...character} />
            </Link>    
          )
        })}
      </Slider.Item>
    </Container>
  )
}

export default HomePage
