"use client"

import React from "react"

// Education data
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Universidad Politecnica de Valencia",
    duration: "2020 - present",
    description: "Currently learning essential computer science topics such as Data Structures, Algorithms, Database Systems, Operating Systems, and Software Engineering. I strive to keep up with my studies while also being involved in extracurricular activities.",
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Juan Ramón Jimenez High School",
    duration: "2017 - 2019",
    description: "Completed pre-engineering with a focus on Mathematics, Physics.",
  }
]

export function EducationSection() {
  return (
    <section id="education" className="section bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Education</h2>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-md animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">{item.degree}</h3>
                <span className="text-muted-foreground">{item.duration}</span>
              </div>
              <h4 className="text-lg mb-2">{item.institution}</h4>
              <p className="mb-4">{item.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 