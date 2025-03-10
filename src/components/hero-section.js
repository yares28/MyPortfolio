"use client"

import React from "react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Yahya Fares</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground">
            Computer Science Student at UPV
          </h2>
          <p className="text-lg mb-8 max-w-md">
            Passionate about software development, machine learning, and creating
            innovative solutions to real-world problems.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="Yahya_Fares_CV.pdf"
              className="px-6 py-3 bg-secondary text-black font-medium rounded-md hover:bg-secondary/80 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            {/* Replace with your profile image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-4xl font-bold text-primary-foreground">
              YF
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 