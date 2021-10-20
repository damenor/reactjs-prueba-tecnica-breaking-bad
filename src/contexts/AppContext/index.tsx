import { createContext, useReducer, FC, Reducer, useMemo } from 'react'
import { API_URL_EPISODES, API_URL_QUOTES } from '../../constants'

import { getLanguageData, LanguageOptionType, LANGUAGE_OPTIONS } from '../../constants/lang'
import { useApiCharacters } from '../../hooks/api/useApiCharacters'
import useLocalStorage from '../../hooks/utils/useLocalStorage'
import { ICharacter } from '../../interfaces/ICharacter'
import { IEpisode } from '../../interfaces/IEpisode'
import { IQuote } from '../../interfaces/IQuote'
import { IReducerAction } from '../../interfaces/IReducerAction'
import { appReducer, APP_TYPE } from './appReducer'

const defaultState: AppStateType = {
  language: LANGUAGE_OPTIONS.ES,
  labels: {},
  characters: [],
  episodes: [],
  quotes: [],
  setLanguage: (language) => {},
  fetchEpisodes: () => {},
  fetchQuotes: () => {}
}

export type AppStateType = {
  language: LanguageOptionType
  labels: any
  characters: ICharacter[]
  episodes: IEpisode[]
  quotes: IQuote[]
  fetchEpisodes: () => void
  fetchQuotes: () => void
  setLanguage: (language: LanguageOptionType) => void
}

export const AppContext = createContext(defaultState)

const fetchApi = async (url: string, callback: (data: any) => void) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    callback(data)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const AppProvider: FC = ({ children }) => {
  
  const [characters = []] = useApiCharacters()
  const [languageLocalStorage, setLanguageLocalStorage] = useLocalStorage('language', defaultState.language)
  
  const [state, dispatch] = useReducer<Reducer<AppStateType, IReducerAction>>(appReducer, {
    ...defaultState,
    language: languageLocalStorage,
    labels: getLanguageData(languageLocalStorage)
  })
  
  const setLanguage = (language: LanguageOptionType) => {
    setLanguageLocalStorage(language)
    dispatch({ type: APP_TYPE.SET_LANGUAGE, payload: language })
  }
  
  const getCharacterByName = (name: string) => state.characters.filter(character => character.name === name)[0]
  
  const setEpisodes = (episodes: IEpisode[]) => dispatch({ type: APP_TYPE.SET_Episodes, payload: episodes })

  const fetchEpisodes = async () => {
    if(state.episodes.length > 0) return state.episodes
    fetchApi(API_URL_EPISODES, setEpisodes)
  }

  const setQuotes = (quotes: IQuote[]) => dispatch({ type: APP_TYPE.SET_QUOTES, payload: quotes })

  const fetchQuotes = () => {
    if(state.quotes.length > 0) return state.quotes
    fetchApi(API_URL_QUOTES, setQuotes)
  }

  const value = useMemo(() => ({ 
    ...state, 
    characters,
    setLanguage,
    getCharacterByName,
    fetchEpisodes,
    fetchQuotes,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [characters, state])

  return (
    <AppContext.Provider value={value}>{ children }</AppContext.Provider>
  )

}
