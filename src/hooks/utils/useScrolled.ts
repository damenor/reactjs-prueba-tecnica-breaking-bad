import { useCallback, useState } from 'react'

import useEventListener from './useEventListener'

const useScrolled = (offset = 80) => {

  const [isScrolled, setIsScrolled] = useState(false)

  const onScroll = useCallback(() => {
    window.scrollY > offset ? !isScrolled && setIsScrolled(true) : isScrolled && setIsScrolled(false)
  }, [isScrolled, setIsScrolled, offset])
  
  useEventListener('scroll', onScroll)

  return isScrolled
  
}

export default useScrolled