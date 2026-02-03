import { useEffect, useState } from 'react'

export default function useLocaleStorage(key, value) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? value
  })

  useEffect(
    () => window.localStorage.setItem(key, JSON.stringify(state)),
    [key, state],
  )

  return [state, setState]
}
