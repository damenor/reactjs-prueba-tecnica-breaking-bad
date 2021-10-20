export const API_URL_BASE = 'https://www.breakingbadapi.com/api'

export const API_URL_CHARACTERS = `${API_URL_BASE}/characters`
export const API_URL_CHARACTER_RANDOM = `${API_URL_BASE}/character/random`
export const API_URL_EPISODES = `${API_URL_BASE}/episodes`
export const API_URL_QUOTES = `${API_URL_BASE}/quotes`
export const API_URL_QUOTE_RANDOM_BY_AUTHOR = `${API_URL_BASE}/quote/random?author`

export const API_CATEGORIES = {
  ORIGINAL: 'Breaking Bad',
  BETTER_CALL_SAUL: 'Better Call Saul'
}

export const API_STATUS = {
  ALIVE: 'Alive',
  DECEASED: 'Deceased',
  PRESUMED_DEAD: 'Presumed dead'
}

export const API_PARAM = {
  LIMIT: 'limit',
  OFFSET: 'offset',
  NAME: 'name',
  CATEGORY: 'category',
  AUTHOR: 'author',
}
