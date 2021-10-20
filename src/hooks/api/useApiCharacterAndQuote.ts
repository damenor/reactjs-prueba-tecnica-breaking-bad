import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'

import { API_URL_CHARACTERS } from '../../constants'
import { ICharacter } from '../../interfaces/ICharacter'
import useApiQuoteRandomByAuthor from './useApiQuoteRandomByAuthor'

const useApiCharacterAndQuote = () => {

  const { state } = useLocation<any>()
  const [character, setCharacter] = useState<ICharacter | undefined>(state?.character)
  const params = useParams()
  
  const {quote, fetchQuote} = useApiQuoteRandomByAuthor(character?.name)
  
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

  return { quote, fetchQuote, character }

}

export default useApiCharacterAndQuote
