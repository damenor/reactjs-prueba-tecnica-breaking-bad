import { createContext, useContext, useReducer, FC } from 'react'

interface IReducerAction {
  type: string
  payload: any
}

type TranslateStateType = {}

const defaultState = {}

const TranslateContext = createContext(defaultState)

const TYPE_PRUEBA = ''

const translateReducer = (state: TranslateStateType, action: IReducerAction) => {

  switch(action.type) {
    case TYPE_PRUEBA: {
      return { ...state }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }

}

export const TranslateProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(translateReducer, {})
  const value = { ...state, dispatch }

  return (
    <TranslateContext.Provider value={value}>{ children }</TranslateContext.Provider>
  )

}

export const useTranslateContext = () => {

  const context = useContext(TranslateContext)
  if(context === undefined) throw new Error('useTranslateContext must be used within a TranslateContext')
  return context

}
