import {useCallback, useMemo, useState} from 'react'

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export type UseHoverResult = [boolean, UseHoverBind]

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
    console.log('onMouseEnter')
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
    console.log('onMouseLeave')
  }, [])

  return useMemo(
    () => [
      isHover,
      {
        onMouseEnter,
        onMouseLeave
      }
    ],
    [isHover, onMouseEnter, onMouseLeave]
  )
}