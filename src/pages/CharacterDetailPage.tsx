import { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/common/Button'
import Paragraph from '../components/common/Paragraph'
import Loading from '../components/Loading'

import { API_STATUS, API_URL_CHARACTERS, API_URL_QUOTE_RANDOM_BY_AUTHOR, EMOJI } from '../constants'
import { useAppContext } from '../hooks/contexts/useAppContext'

import { ICharacter } from '../interfaces/ICharacter'
import { mediaQueries } from '../styles'

const CharacterDetailContent = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  padding: 1rem;
  h2 {
    font-size: 3rem;
    margin: 0;
    margin-top: 2rem;
  }
  h3 {
    margin: 0;
    font-size: 2rem;
  }
  img {
    width: 100%;
    border-radius: 12px;
  }
  ${mediaQueries('lg')(`
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  `)}
`

const CharacterDetailData = styled.div`
  padding: 0 1rem;
  ${mediaQueries('lg')(`
    padding-left: 3rem;
  `)}
`

const CharacterContainerImage = styled.div`
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

const CharacterDetailTitle = styled(Paragraph)`
  margin-top: 2rem;
  color: ${({theme:{color}}) => color.secondary};
  font-size: 1.75rem;
`

const CharacterDetailButtons = styled.div`
  display: flex;
  justify-content: flex-flex-start;
  gap: 1rem;
  padding: 2rem 0;
  a {
    font-size: 2.5rem;
  }
`

const CharacterDetailQuote = styled.div`
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

const useApiQuoteByAuthor = (author: string | undefined) => {

  const convertAuthorToString = (author: string | undefined) => author && author.replace(' ', '+')

  const [quote, setQuote] = useState('')
  const authorString = useRef(convertAuthorToString(author))

  const fetchQuote = (author?: string | undefined) => { 
    if(author) authorString.current = convertAuthorToString(author)
    if(!authorString.current) return
    const url = `${API_URL_QUOTE_RANDOM_BY_AUTHOR}=${authorString.current}`
    fetch(url)
      .then(res => res.json())
      .then(data => setQuote(data[0]?.quote || ''))
      .catch(console.error)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchQuote(), [])

  return {quote, fetchQuote}

} 

const CharacterDetailPage = () => {

  const { state } = useLocation<any>()
  const params = useParams()
  const [character, setCharacter] = useState<ICharacter | undefined>(state?.character)
  const { labels:{character_detail} } = useAppContext()
  
  const {quote, fetchQuote} = useApiQuoteByAuthor(character?.name)
  
  useEffect(() => {
    const { id } = params as { id: string }
    if(!character) {
      const url = `${API_URL_CHARACTERS}/${id}`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const characterTemp = data[0]
          if(characterTemp) {
            setCharacter(characterTemp)
            fetchQuote(characterTemp.name)
          }
        })
        .catch(console.error)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  if(!character) return <Loading isVisible={true}/>

  return (
    <CharacterDetailContainer >
      <CharacterDetailContent>
        <CharacterContainerImage>
          <img src={character?.img} alt="character"/>
          <CharacterDetailStatus>
            { character?.status === API_STATUS.DECEASED ? EMOJI.DEATH : EMOJI.HEART }
          </CharacterDetailStatus>
        </CharacterContainerImage>
        <CharacterDetailData>

          <h2>{ character?.name }</h2>
          <Paragraph>{ character?.nickname }</Paragraph>
          <CharacterDetailTitle>{ character_detail.title_actor }</CharacterDetailTitle>
          <Paragraph>{ character?.portrayed }</Paragraph>

          <CharacterDetailTitle>{ character_detail.title_professions }</CharacterDetailTitle>
          { character?.occupation && character?.occupation.map((occupation, index) => (
            <Paragraph key={`${occupation}-${index}`}>{ occupation }</Paragraph>
          )) }

          <CharacterDetailTitle>{ character_detail.title_birthday }</CharacterDetailTitle>
          <Paragraph>{ character?.birthday }</Paragraph>

          <CharacterDetailButtons>
            { quote !== '' && 
              <Button onClick={() => fetchQuote()}>{ character_detail.button_quote }</Button> 
            }
            <Link to='/'>{ EMOJI.HOME }</Link>
          </CharacterDetailButtons>
          { quote !== '' && 
            <CharacterDetailQuote>
              <Paragraph>{quote}</Paragraph>
              <img src="images/quote.svg" alt="quote" />
            </CharacterDetailQuote> 
          }
        </CharacterDetailData>
      </CharacterDetailContent>
    </CharacterDetailContainer>
  )
}

export default CharacterDetailPage
