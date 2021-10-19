import { useState } from 'react'

const useSliderTouch = ({ prev, next }: { prev: () => void, next: () => void }) => {

  const [touchPosition, setTouchPosition] = useState<number | null>(null)

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

  return { handleTouchMove, handleTouchStart }

}

export default useSliderTouch
