import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { getRandomBackgroundImage } from '../../../constants'

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    background: rgba(32, 32, 32, 0.75);
    background: ${({theme:{color}}) => `linear-gradient(0deg, ${color.bg} 5%, rgba(39,106,86,0.35) 50%, rgba(32, 32, 32, 0.8) 90%, ${color.bg} 100%)`};
  }

  .buttons {
    position: absolute;
    bottom: 0;
  }
`
const SliderContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  /* min-height: 100vh; */
  max-height: 100vh;
  gap: 1rem;
  padding: 10rem 1rem;
`

const Slider = ({ children, autoloop }: any) => {

  const sliderContentRef = useRef<any>(null)
  const intervalRef = useRef<any>(null)

  const [bgImage, setBgImage] = useState(getRandomBackgroundImage())
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  useEffect(() => {
    if(autoloop) {
      const sliderContentRefCurrent = sliderContentRef.current
      const clearInvervalCurrent = () => clearInterval(intervalRef.current)
      const setIntervalRef = () => intervalRef.current = setInterval(() => next(), 2000)
      intervalRef.current = setInterval(() => next(), 2000)
      sliderContentRefCurrent.addEventListener('mouseenter', clearInvervalCurrent)
      sliderContentRefCurrent.addEventListener('mouseleave', setIntervalRef)
      return () => {
        clearInterval(intervalRef.current)
        sliderContentRefCurrent.removeEventListener('mouseenter', clearInvervalCurrent)
        sliderContentRefCurrent.removeEventListener('mouseleave', setIntervalRef)
      }
    }
  }, [autoloop])

  const prev = () => {
    setBgImage(getRandomBackgroundImage())
    const sliderContentRefCurrent = sliderContentRef?.current
    const sliderContentRefChildrens = sliderContentRefCurrent?.children || []
    if(sliderContentRefChildrens.length === 0) return
    const lastIndex = sliderContentRefChildrens.length - 1
    const lastElement = sliderContentRefChildrens[lastIndex]
    const sizeElement = sliderContentRefChildrens[0].offsetWidth
    
    sliderContentRefCurrent.insertBefore(lastElement, sliderContentRefCurrent.firstChild)
    sliderContentRefCurrent.style.transition = 'none'
    sliderContentRefCurrent.style.transform = `translateX(-${sizeElement}px)`
    
    setTimeout(() => {
      sliderContentRefCurrent.style.transition = '300ms ease-in-out all' 
      sliderContentRefCurrent.style.transform = 'translateX(0)'
    }, 30)
    
  }
  
  const next = () => {
    setBgImage(getRandomBackgroundImage())
    const sliderContentRefCurrent = sliderContentRef?.current
    const sliderContentRefChildrens = sliderContentRefCurrent?.children || []
    if(sliderContentRefChildrens.length === 0) return
    const firstElement = sliderContentRefChildrens[0]
    const sizeElement = firstElement.offsetWidth
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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition
    if (touchDown === null) return
    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch
    if (diff > 5) next()
    if (diff < -5) prev()
    setTouchPosition(null)
  }

  return (
    <SliderContainer style={{ backgroundImage: `url(${bgImage})` }}>
      <SliderContent 
        ref={sliderContentRef} 
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove}>
        { children }
      </SliderContent>
      <div className="buttons">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </SliderContainer>
  )
}

Slider.Item = ({children}: any) => {
  return <Slider>
    {children}
  </Slider>
}

export default Slider
