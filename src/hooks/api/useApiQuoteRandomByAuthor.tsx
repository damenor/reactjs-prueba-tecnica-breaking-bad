import { useEffect, useRef, useState } from 'react'

import { API_URL_QUOTE_RANDOM_BY_AUTHOR } from '../../constants'

const useApiQuoteRandomByAuthor = (author: string | undefined) => {

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

export default useApiQuoteRandomByAuthor
