import { API_URL_EPISODES } from '../../constants/index'
import { useFetch } from '../useFetch'

export const useApiEpisodies = () => {
  const { data, error } = useFetch(API_URL_EPISODES)
  return [data, error]
}
