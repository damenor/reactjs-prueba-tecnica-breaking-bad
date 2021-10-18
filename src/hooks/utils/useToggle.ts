import { useCallback, useState } from 'react'

type useToggleReturn = [boolean, () => void]

const useToggle = (initialValue = false): useToggleReturn => {

  const [state, setState] = useState<boolean>(initialValue)
  const toggle = useCallback(() => setState(prevState => !prevState), [setState])
  return [state, toggle]

}

export default useToggle
