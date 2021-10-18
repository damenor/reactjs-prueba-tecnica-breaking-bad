import { getLanguageData } from './../../constants/lang/index'
import { IReducerAction } from '../../interfaces/IReducerAction'

import { AppStateType } from './'

export const APP_TYPE = {
  SET_LANGUAGE: 'setLanguage'
}

export const appReducer = (state: AppStateType, action: IReducerAction) => {

  switch(action.type) {
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
