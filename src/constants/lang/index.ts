import ESAppData from './es/app.json'
import ESSerieData from './es/serie.json'

import ENAppData from './en/app.json'
import ENSerieData from './en/serie.json'

const ES = {
  ...ESAppData,
  ...ESSerieData,
}

const EN = {
  ...ENAppData,
  ...ENSerieData,
}

export type LanguageOptionType = 'es' | 'en'

export const LANGUAGE_OPTIONS: { [key:string]: LanguageOptionType } = {
  ES: 'es',
  EN: 'en'
}

export const getLanguageData = (option: LanguageOptionType) => {

  switch(option) {
    case LANGUAGE_OPTIONS.ES: {
      return ES
    }
    case LANGUAGE_OPTIONS.EN: {
      return EN
    }
    default: {
      throw new Error(`Unhandled option type: ${option}`)
    } 

  }

}
