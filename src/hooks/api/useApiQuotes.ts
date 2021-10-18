import { useFetch } from './../utils/useFetch'
import { API_URL_QUOTES } from '../../constants/index'

type UseApiQuotesRandomByAuthorProps = {
  author?: string
  isRandom?: boolean
}

export const useApiQuotesRandomByAuthor = ({ author }: UseApiQuotesRandomByAuthorProps) => {

  const { data, error } = useFetch(`${API_URL_QUOTES}${author}`)
  return [data, error]

}
