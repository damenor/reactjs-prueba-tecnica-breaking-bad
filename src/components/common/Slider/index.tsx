import { FC } from 'react'
import styled from 'styled-components'

import { CSSBeforeGradient } from '../../../styles/utils/CSSBeforeGradient'
import SliderContainerButtons from './SliderContainerButtons'
import useSliderPrevNext from './useSliderPrevNext'
import useSliderTouch from './useSliderTouch'

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in-out;
  ${({theme}) => CSSBeforeGradient(theme)}
`

const SliderContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-height: 100vh;
  gap: 1rem;
  padding: 10rem 1rem;
`

const Slider: FC = ({ children }) => {

  const { prev, next, bgImage, sliderContentRef } = useSliderPrevNext()
  const { handleTouchMove, handleTouchStart } = useSliderTouch({ prev, next })

  return (
    <SliderContainer style={{ backgroundImage: `url(${bgImage})` }}>
      <SliderContent 
        ref={sliderContentRef} 
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove}
        onTransitionEnd={() => console.log('onTransitionEnd')}>
        { children }
      </SliderContent>
      <SliderContainerButtons>
        <button onClick={prev}>
          <img src="images/arrow.svg" alt="slider arrow left"/>
        </button>
        <button onClick={next}>
          <img src="images/arrow.svg" alt="slider arrow right"/>
        </button>
      </SliderContainerButtons>
    </SliderContainer>
  )
}

export default Slider
