import { createContext, useReducer, FC, Reducer, useMemo } from 'react'

import { getLanguageData, LanguageOptionType, LANGUAGE_OPTIONS } from '../../constants/lang'
import { IReducerAction } from '../../interfaces/IReducerAction'
import { appReducer, APP_TYPE } from './appReducer'

const defaultState: AppStateType = {
  language: LANGUAGE_OPTIONS.ES,
  labels: {},
  setLanguage: (language) => {}
}

export type AppStateType = {
  language: LanguageOptionType
  labels: any
  setLanguage: (language: LanguageOptionType) => void
}

export const AppContext = createContext(defaultState)

export const AppProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer<Reducer<AppStateType, IReducerAction>>(appReducer, {
    ...defaultState,
    labels: getLanguageData(defaultState.language)
  })

  const setLanguage = (language: LanguageOptionType) => dispatch({ type: APP_TYPE.SET_LANGUAGE, payload: language })

  const value = useMemo(() => ({ 
    ...state, 
    setLanguage,
  }), [state])

  return (
    <AppContext.Provider value={value}>{ children }</AppContext.Provider>
  )

}
