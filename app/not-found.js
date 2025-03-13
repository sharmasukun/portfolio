"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "./not-found.css"

export default function NotFound() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "The page you are looking for doesn't exist or has been moved."

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Generate random stars
  const generateStars = () => {
    const stars = []
    for (let i = 0; i < 50; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
      }
      stars.push(<div key={i} className="star" style={style}></div>)
    }
    return stars
  }

  return (
    <div className="not-found-container">
      <div className="stars-container">{generateStars()}</div>

      <div className="glitch-container">
        <div className="glitch" data-text="404">
          404
        </div>
      </div>

      <div className="not-found-content">
        <h2 className="lost-in-space">Lost in Space</h2>
        <p className="typewriter">
          {displayText}
          <span className={`cursor ${showCursor ? "visible" : "hidden"}`}>|</span>
        </p>

        <div className="space-illustration">
          <div className="planet"></div>
          <div className="astronaut">
            <div className="astronaut-body"></div>
            <div className="astronaut-head"></div>
            <div className="astronaut-arm-left"></div>
            <div className="astronaut-arm-right"></div>
            <div className="astronaut-leg-left"></div>
            <div className="astronaut-leg-right"></div>
          </div>
        </div>

        <Link href="/" className="not-found-button">
          <span className="button-text">Return to Earth</span>
          <span className="button-icon">🚀</span>
        </Link>
      </div>

      <div className="meteor-shower">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="meteor"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

