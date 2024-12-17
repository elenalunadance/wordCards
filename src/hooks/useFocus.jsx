import { useEffect, useRef } from 'react';

export default function useFocus() {
  const buttonRef = useRef(null)

  useEffect(() => {
    buttonRef.current.focus()
  }, [])

  return buttonRef
}