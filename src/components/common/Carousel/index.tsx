import { useEffect, useState } from 'react'

/*


  .carousel-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .carousel-wrapper {
    display: flex;
    width: 100%;
    position: relative;
  }

  .carousel-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .carousel-content {
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none;  
    scrollbar-width: none; 
  }

  .carousel-content::-webkit-scrollbar, .carousel-content::-webkit-scrollbar {
    display: none;
  }

  .carousel-content > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .carousel-content.show-2 > * {
    width: 50%;
  }

  .carousel-content.show-3 > * {
    width: calc(100% / 3);
  }

  .carousel-content.show-4 > * {
    width: calc(100% / 4);
  }

  .left-arrow, .right-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: white;
    border: 1px solid #ddd;
  }

  .left-arrow {
    left: 24px;
  }

  .right-arrow {
    right: 24px;
  }

  @media (hover: none) and (pointer: coarse) {
    .left-arrow, .right-arrow {
        display: none;
    }
  }

*/

const Carousel = (props: any) => {
  const { children, show, infiniteLoop } = props

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
  const [length, setLength] = useState(children.length)

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  )
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const [touchPosition, setTouchPosition] = useState(null)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
    setIsRepeating(infiniteLoop && children.length > show)
  }, [children, infiniteLoop, show])

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, show, length])

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState: any) => prevState + 1)
    }
  }

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState: any) => prevState - 1)
    }
  }

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(null)
  }

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false)
        setCurrentIndex(show)
      }
    }
  }

  const renderExtraPrev = () => {
    let output = []
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index])
    }
    output.reverse()
    return output
  }

  const renderExtraNext = () => {
    let output = []
    for (let index = 0; index < show; index++) {
      output.push(children[index])
    }
    return output
  }

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {/* You can alwas change the content of the button to other things */}
        {(isRepeating || currentIndex > 0) && (
          <button onClick={prev} className='left-arrow'>
            &lt;
          </button>
        )}
        <div
          className='carousel-content-wrapper'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}>
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}>
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {(isRepeating || currentIndex < length - show) && (
          <button onClick={next} className='right-arrow'>
            &gt;
          </button>
        )}
      </div>
    </div>
  )
}

export default Carousel
