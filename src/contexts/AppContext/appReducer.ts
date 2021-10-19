import { getLanguageData } from './../../constants/lang/index'
import { IReducerAction } from '../../interfaces/IReducerAction'

import { AppStateType } from './'

export const APP_TYPE = {
  SET_CHARACTERS: 'setCharacters',
  SET_Episodes: 'setEpisodes',
  SET_QUOTES: 'setQuotes',
  SET_LANGUAGE: 'setLanguage',
}

export const appReducer = (state: AppStateType, action: IReducerAction) => {

  switch(action.type) {
    case APP_TYPE.SET_Episodes: {
      return { ...state, episodes: action.payload }
    }
    case APP_TYPE.SET_QUOTES: {
      return { ...state, quotes: action.payload }
    }
    case APP_TYPE.SET_LANGUAGE: {
      const language = action.payload
      const labels = getLanguageData(language)
      return { ...state, language, labels }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }

}
