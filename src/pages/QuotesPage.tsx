import { useEffect } from 'react'
import Loading from '../components/Loading'
import { useAppContext } from '../hooks/contexts/useAppContext'

const QuotesPage = () => {

  const { fetchQuotes, quotes } = useAppContext()

  useEffect(() => {
    (async() => await fetchQuotes())()
    console.log({quotes})
  }, [fetchQuotes])
  
  return (
    <div>
      <Loading isVisible={quotes.length ===0} />
      QuotesPage
    </div>
  )
}

export default QuotesPage
