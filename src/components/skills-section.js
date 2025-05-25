"use client"

import React from "react"


const skillsData = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "C/C++", "HTML/CSS", "SQL", "Java", "React", "TailwindCSS", "PostgreSQL", "Springboot(Java)", "Node.js"]
  },
  {
    category: "Languages",
    skills: ["English", "Arabic", "French", "Spanish"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Docker", "AWS"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Critical Thinking"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="section bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-md animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 