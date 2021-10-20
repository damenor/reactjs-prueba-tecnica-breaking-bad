import { ChangeEvent, useEffect, useState } from 'react'

import Loading from '../components/Loading'
import Quote from '../components/Quote'
import QuotesContainer from '../components/Quote/QuotesContainer'
import Input from '../components/common/Input'
import { useAppContext } from '../hooks/contexts/useAppContext'
import { IQuote } from '../interfaces/IQuote'

const QuotesPage = () => {

  const { fetchQuotes, quotes, characters, labels } = useAppContext()
  const [quotesFiltered, setQuotesFiltered] = useState(quotes)

  useEffect(() => {
    (async() => await fetchQuotes())()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchQuotes])

  useEffect(() => setQuotesFiltered(quotes), [quotes])

  const onChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const quotesFilteredTemp = quotes.filter(quote => quote.author.toLowerCase().includes(target.value.toLowerCase()))
    setQuotesFiltered(quotesFilteredTemp)
  }

  const getImageAndIdByAuthor = (quote: IQuote) => {
    const { img, char_id } = characters.filter(character => character.name.includes(quote.author.split(' ')[1]))[0]
    return { img, char_id }
  }

  return (
    <div>
      <Loading isVisible={quotes.length ===0} />
      <Input placeholder={labels.quotes.search_by_author} onChange={onChangeSearch}/>
      <QuotesContainer>
        { quotesFiltered.map(quote => (
          <Quote key={quote.quote_id} quote={quote} authorData={getImageAndIdByAuthor(quote)}/>
        )) }
      </QuotesContainer>
    </div>
  )
}

export default QuotesPage
