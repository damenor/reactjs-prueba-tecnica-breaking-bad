const addHttpParam = (url: string, param: string, paramValue: string | number | undefined) => {
  const includeParam = url.includes('?')
  return `${url}${includeParam ? '&' : '?'}${param}=${paramValue}`
}

export const getUrlWithParams = (url: string, params: {[key:string]: string | number}) => {
  let urlTemp = url
  if(params) {
    Object.keys(params).forEach((key: string) => {
      const paramValue = params && params[key]
      urlTemp = addHttpParam(urlTemp, key, paramValue)
    })
  }
  return urlTemp
}
