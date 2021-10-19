//https://niemvuilaptrinh.medium.com/how-to-create-dropdown-and-15-dropdown-examples-for-website-cd38076ea9c
// https://medium.com/@mariokandut/media-queries-with-styled-components-7a93e4c876f2

// https://codepen.io/jastew/pen/ukayb

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Character from '../components/Character'
import HomeWelcome from '../components/Home/HomeWelcome'
import Slider from '../components/common/Slider'
import { ICharacter } from '../interfaces/ICharacter'
import { useAppContext } from '../hooks/contexts/useAppContext'
import { API_CATEGORIES } from '../constants'
import Article from '../components/common/Article'
import CharacterSlider from '../components/Character/CharacterSlider'

const Container = styled.div`
  padding-top: ${({theme:{navbar}}) => `calc(${navbar.height} + 0)`};
`

const HomePage = () => {

  const { characters, labels} = useAppContext()
  
  const characterOriginal = characters.filter(character => !character.category.includes(API_CATEGORIES.BETTER_CALL_SAUL))
  const characterBetterCallSaul = characters.filter(character => character.category.includes(API_CATEGORIES.BETTER_CALL_SAUL))

  return (
    <Container>
      <HomeWelcome />
      <CharacterSlider title="Personajes serie original" characters={characterOriginal} />
      <Article title="Better Call Saul" paragraph={labels.description_better_call_saul}/>
      <CharacterSlider title="Personajes Better Call Saul" characters={characterBetterCallSaul} />
    </Container>
  )
}

export default HomePage
