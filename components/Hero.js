import Link from "next/link"
import "./Hero.css"

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Sukun Sharma</span>
          </h1>
          <h2>Frontend Developer</h2>
          <p>I build responsive and user-friendly web applications with modern technologies.</p>
          <div className="hero-buttons">
            <Link href="#projects" className="btn">
              View My Work
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/placeholder.svg?height=400&width=400" alt="Hero" />
        </div>
      </div>
    </section>
  )
}

