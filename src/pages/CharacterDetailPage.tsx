import styled from 'styled-components'
import CharacterDetailContent from '../components/Character/CharacterDetailContent'

import CharacterDetailData from '../components/Character/CharacterDetailData'
import Loading from '../components/Loading'
import PageContainer from '../components/PageContainer'

import { API_STATUS, EMOJI } from '../constants'
import useApiCharacterAndQuote from '../hooks/api/useApiCharacterAndQuote'

const CharacterDetailContainerImage = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 8px;
  }
`

const CharacterDetailStatus = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
`
const CharacterDetailPage = () => {

  const { quote, fetchQuote, character } = useApiCharacterAndQuote()

  if(!character) return <Loading isVisible={true}/>

  return (
    <PageContainer>
      <CharacterDetailContent>
        <CharacterDetailContainerImage>
          <img src={character?.img} alt="character"/>
          <CharacterDetailStatus>
            { character?.status === API_STATUS.DECEASED ? EMOJI.DEATH : EMOJI.HEART }
          </CharacterDetailStatus>
        </CharacterDetailContainerImage>
        <CharacterDetailData character={character} quote={quote} fetchQuote={fetchQuote}/>
      </CharacterDetailContent>
    </PageContainer>
  )
}

export default CharacterDetailPage
