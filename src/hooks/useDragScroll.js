import { useRef, useState } from 'react'

export function useDragScroll() {
    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)
    const hasDragged = useRef(false)

    const handleMouseDown = (event) => {
        if (!scrollRef.current) {
            return
        }

        setIsDragging(true)
        hasDragged.current = false
        startX.current = event.pageX - scrollRef.current.offsetLeft
        scrollLeft.current = scrollRef.current.scrollLeft
    }

    const stopDragging = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (event) => {
        if (!isDragging || !scrollRef.current) {
            return
        }

        event.preventDefault()

        const x = event.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX.current) * 1.5

        if (Math.abs(walk) > 5) {
            hasDragged.current = true
        }

        scrollRef.current.scrollLeft = scrollLeft.current - walk
    }

    const wasClickDrag = () => hasDragged.current

    return {
        dragHandlers: {
            onMouseDown: handleMouseDown,
            onMouseLeave: stopDragging,
            onMouseMove: handleMouseMove,
            onMouseUp: stopDragging,
        },
        isDragging,
        scrollRef,
        wasClickDrag,
    }
}
