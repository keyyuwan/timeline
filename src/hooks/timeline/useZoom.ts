import { useCallback, useEffect, useState } from 'react'

export function useZoom() {
  const [zoom, setZoom] = useState(1) // zoomLevel (1x, 1.2x, 0.8x, etc)

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault()

    setZoom(prev => {
      const next = e.deltaY < 0 ? prev * 1.1 : prev * 0.9
      return Math.min(Math.max(next, 0.3), 4) // clamp between 0.3x and 4x
    })
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [handleWheel])

  return {
    zoom,
  }
}
