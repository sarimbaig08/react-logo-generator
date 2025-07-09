"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">LogoCraft</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#generator" className="text-gray-300 hover:text-white transition-colors">
              Generator
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#generator" className="block px-3 py-2 text-gray-300 hover:text-white">
                Generator
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-white">
                Testimonials
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
