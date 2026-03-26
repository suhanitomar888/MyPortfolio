import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const circleRef = useRef(null)
  const requestRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const circlePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Both elements follow with same easing/delay to stay perfectly centered
      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * 0.12
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * 0.12

      const x = circlePos.current.x
      const y = circlePos.current.y

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }

      requestRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <div className="custom-cursor-container pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Both dot and circle share the same position ref via JS but are separate elements for styling */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--brand)] shadow-[0_0_8px_var(--brand)]"
      />
      <div
        ref={circleRef}
        className="fixed left-0 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--brand)]/20 shadow-[0_0_12px_rgba(163,85,52,0.1)] transition-[width,height,border-color,background-color,box-shadow,opacity] duration-300"
      />
    </div>
  )
}

export default CustomCursor
