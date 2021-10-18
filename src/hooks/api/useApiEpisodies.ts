import { API_URL_EPISODES } from '../../constants/index'
import { useFetch } from '../utils/useFetch'

export const useApiEpisodies = () => {
  const { data, error } = useFetch(API_URL_EPISODES)
  return [data, error]
}
