"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string
  delay?: number
  className?: string
}

export function Typewriter({ text, delay = 100, className = "" }: TypewriterProps) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      {currentIndex < text.length && <span className="animate-pulse text-blue-600 ml-1">|</span>}
    </span>
  )
}
