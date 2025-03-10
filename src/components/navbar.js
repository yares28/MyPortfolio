"use client"

import React, { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">Tayyaba Imtiaz</a>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#education" className="hover:text-primary transition-colors">Education</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button className="text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 