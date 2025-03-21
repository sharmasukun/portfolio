"use client"
import "./Footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Portfolio</h3>
            <p>Building the web, one pixel at a time.</p>
            <div className="coffee-button-container">
              <a
                href="https://buymeacoffee.com/sukun"
                target="_blank"
                rel="noopener noreferrer"
                className="coffee-button"
              >
                <span className="coffee-icon">☕</span>
                <span>Buy me a coffee</span>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="op-button-container">
              <a
                href="http://35.226.147.46/lsdproject"
                target="_blank"
                rel="noopener noreferrer"
                className="op-button"
              >
              <div className="op-icon">
                <img src="https://www.openproject.org/assets/images/press/openproject-icon-white-transparent-1-a5752689.svg" style="height:35px" alt="">
                </img>
                <span>LSD-op</span>
              </div>
              </a>
            </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sukun Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

