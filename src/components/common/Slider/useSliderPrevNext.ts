import { useRef, useState } from 'react'

import { getRandomBackgroundImage } from '../../../constants'

const useSliderPrevNext = () => {

  const sliderContentRef = useRef<any>(null)

  const [bgImage, setBgImage] = useState(getRandomBackgroundImage())

  const setImageAndGetSizeChildren = () => {
    setBgImage(getRandomBackgroundImage())
    const sliderContentRefCurrent = sliderContentRef?.current
    const sliderContentRefChildrens = sliderContentRefCurrent?.children || []
    if(sliderContentRefChildrens.length === 0) return null
    return sliderContentRefChildrens[0].offsetWidth
  }
  
  const prev = () => {
    
    const sizeElement = setImageAndGetSizeChildren()
    const sliderContentRefCurrent = sliderContentRef?.current
    const sliderContentRefChildrens = sliderContentRefCurrent?.children || []

    const lastIndex = sliderContentRefChildrens.length - 1
    const lastElement = sliderContentRefChildrens[lastIndex]
    
    sliderContentRefCurrent.insertBefore(lastElement, sliderContentRefCurrent.firstChild)
    sliderContentRefCurrent.style.transition = '0ms ease-in-out all'
    sliderContentRefCurrent.style.transform = `translateX(-${sizeElement}px)`
   
    // TODO: Revisar
    setTimeout(() => {
      sliderContentRefCurrent.style.transition = '300ms ease-in-out all' 
      sliderContentRefCurrent.style.transform = 'translateX(0)'
    }, 30)
    
  }
  
  const next = () => {
    const sizeElement = setImageAndGetSizeChildren()
    const sliderContentRefCurrent = sliderContentRef?.current
    const sliderContentRefChildrens = sliderContentRefCurrent?.children || []

    const firstElement = sliderContentRefChildrens[0]
    sliderContentRefCurrent.style.transition = '300ms ease-out all' 
    sliderContentRefCurrent.style.transform = `translateX(-${sizeElement}px)`
    
    const transitionEnd = () => {
      sliderContentRefCurrent.style.transition = 'none'
      sliderContentRefCurrent.style.transform = 'translateX(0)'
      sliderContentRefCurrent.appendChild(firstElement)
      sliderContentRefCurrent.removeEventListener('transitionend', transitionEnd)
    }

    sliderContentRefCurrent.addEventListener('transitionend', transitionEnd)
  }

  return { prev, next, bgImage, sliderContentRef }

}

export default useSliderPrevNext
