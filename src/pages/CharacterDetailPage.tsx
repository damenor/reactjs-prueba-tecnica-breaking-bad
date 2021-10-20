import styled from 'styled-components'
import CharacterDetailContent from '../components/Character/CharacterDetailContent'

import CharacterDetailData from '../components/Character/CharacterDetailData'
import Loading from '../components/Loading'

import { API_STATUS, EMOJI } from '../constants'
import useApiCharacterAndQuote from '../hooks/api/useApiCharacterAndQuote'

const CharacterDetailContainerImage = styled.div`
  position: relative;
`

const CharacterDetailStatus = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
`

const CharacterDetailContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  min-height: 100vh;
  padding-top: ${({theme:{navbar}}) => `calc(${navbar.height} + 2rem)`};
`

const CharacterDetailPage = () => {

  const { quote, fetchQuote, character } = useApiCharacterAndQuote()

  if(!character) return <Loading isVisible={true}/>

  return (
    <CharacterDetailContainer >
      <CharacterDetailContent>
        <CharacterDetailContainerImage>
          <img src={character?.img} alt="character"/>
          <CharacterDetailStatus>
            { character?.status === API_STATUS.DECEASED ? EMOJI.DEATH : EMOJI.HEART }
          </CharacterDetailStatus>
        </CharacterDetailContainerImage>
        <CharacterDetailData character={character} quote={quote} fetchQuote={fetchQuote}/>
      </CharacterDetailContent>
    </CharacterDetailContainer>
  )
}

export default CharacterDetailPage
