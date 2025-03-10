"use client"

import React from "react"

export function AboutSection() {
  return (
    <section id="about" className="section bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 animate-in">
            <p className="text-lg mb-4">
              I am a Computer Science student at Universidad Politecnica de Valencia with both theoretical and practical training, passionate about technology and the development of innovative solutions. I seek to apply my knowledge in real-world environments, learn from each experience, and add value to work teams. My goal is to grow professionally through this opportunity, which will allow me to take on new challenges and deepen my knowledge.
            </p>
            <p className="text-lg mb-4">
              My journey in tech began with a curiosity about how digital systems work, which led me to pursue 
              a degree in Computer Science. Throughout my academic career, I've developed a strong foundation 
              in programming, algorithms, and software engineering principles.
            </p>
          </div>
          <div className="md:w-1/2 animate-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Currently pursuing BS in Computer Science</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Interested in web development, AI/ML, and software development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Love solving complex problems and learning new technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Passionate about contributing to open-source projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 