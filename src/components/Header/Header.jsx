"use client"

import { useState } from "react"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <h1>Logo</h1>
          </div>

          <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#generator">Generator</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-mobile-menu">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="header-mobile-nav">
            <div className="mobile-nav-content">
              <a href="#home">Home</a>
              <a href="#generator">Generator</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
