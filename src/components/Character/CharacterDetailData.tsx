import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { EMOJI } from '../../constants'
import { useAppContext } from '../../hooks/contexts/useAppContext'
import { ICharacter } from '../../interfaces/ICharacter'
import { mediaQueries } from '../../styles'
import Button from '../common/Button'
import Paragraph from '../common/Paragraph'

type CharacterDetailDataProps = {
  character: ICharacter
  quote: string
  fetchQuote: () => void
}

const CharacterDetailDataContainer = styled.div`
  padding: 0 1rem;
  ${mediaQueries('lg')(`
    padding-left: 3rem;
  `)}
`

const CharacterDetailDataTitle = styled(Paragraph)`
  margin-top: 2rem;
  color: ${({theme:{color}}) => color.secondary};
  font-size: 1.75rem;
`

const CharacterDetailDataButtons = styled.div`
  display: flex;
  justify-content: flex-flex-start;
  gap: 1rem;
  padding: 2rem 0;
  a {
    font-size: 2.5rem;
  }
`

const CharacterDetailDataQuote = styled.div`
  position: relative;
  padding: 2rem;
  img {
    position: absolute;
    top: 0rem;
    right: 1rem;
    width: 64px;
    opacity: 0.25;
  }
`

const CharacterDetailData = ({ character, quote, fetchQuote }: CharacterDetailDataProps) => {

  const { labels:{character_detail} } = useAppContext()

  return (
    <CharacterDetailDataContainer>

      <h2>{ character?.name }</h2>
      <Paragraph>{ character?.nickname }</Paragraph>
      <CharacterDetailDataTitle>{ character_detail.title_actor }</CharacterDetailDataTitle>
      <Paragraph>{ character?.portrayed }</Paragraph>

      <CharacterDetailDataTitle>{ character_detail.title_professions }</CharacterDetailDataTitle>
      { character?.occupation && character?.occupation.map((occupation, index) => (
        <Paragraph key={`${occupation}-${index}`}>{ occupation }</Paragraph>
      )) }

      <CharacterDetailDataTitle>{ character_detail.title_birthday }</CharacterDetailDataTitle>
      <Paragraph>{ character?.birthday }</Paragraph>

      <CharacterDetailDataButtons>
        { quote !== '' && 
          <Button onClick={() => fetchQuote()}>{ character_detail.button_quote }</Button> 
        }
        <Link to='/'>{ EMOJI.HOME }</Link>
      </CharacterDetailDataButtons>
      { quote !== '' && 
        <CharacterDetailDataQuote>
          <Paragraph>{quote}</Paragraph>
          <img src="images/quote.svg" alt="quote" />
        </CharacterDetailDataQuote> 
      }
    </CharacterDetailDataContainer>
  )
}

export default CharacterDetailData
