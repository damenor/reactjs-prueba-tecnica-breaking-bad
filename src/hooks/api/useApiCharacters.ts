import { ICharacter } from './../../interfaces/ICharacter'
import { 
  API_URL_CHARACTERS, 
  API_PARAM, 
  API_URL_CHARACTER_RANDOM,
} from '../../constants/index'
import { useFetch } from '../utils/useFetch'
import { getUrlWithParams } from '../../utils/http'

type UseApiCharactersProps = {
  limit?: number
  offset?: number
  name?: string
  category?: 'Breaking+Bad' | 'Better+Call'
  isRandom?: boolean
}

export const useApiCharacters = ({
  limit,
  offset,
  name,
  category,
  isRandom
}: UseApiCharactersProps = {}): [data: ICharacter[] | undefined, error: Error | undefined] => {

  let url = isRandom ? API_URL_CHARACTER_RANDOM : API_URL_CHARACTERS

  const params: {[key: string]: string | number} = {}

  if(limit) params[API_PARAM.LIMIT] = limit
  if(offset) params[API_PARAM.OFFSET] = offset
  if(name) params[API_PARAM.NAME] = name
  if(category) params[API_PARAM.CATEGORY] = category

  const endpoint = getUrlWithParams(url, params)

  const { data, error } = useFetch<ICharacter[]>(endpoint)
  return [data, error]

}
