"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "./Navbar.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if user previously set dark mode
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode === "true") {
      setIsDarkMode(true)
      document.body.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if (newMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

    localStorage.setItem("darkMode", String(newMode))
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          <span>Portfolio</span>
        </Link>

        <div className="navbar-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={isMenuOpen ? "open" : ""}></div>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

