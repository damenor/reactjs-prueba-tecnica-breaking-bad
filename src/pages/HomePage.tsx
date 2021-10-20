import styled from 'styled-components'

import HomeWelcome from '../components/Home/HomeWelcome'
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
      <CharacterSlider title={labels.home.title_original} characters={characterOriginal} />
      <Article title="Better Call Saul" paragraph={labels.description_better_call_saul}/>
      <CharacterSlider title={labels.home.title_better_call_saul} characters={characterBetterCallSaul} />
    </Container>
  )
}

export default HomePage
