"use client"

import React, { useState, useRef, useEffect } from "react"

// Project data
const projectsData = [
  {
    title: "Pathfinder Visualizer:",
    description: "A dynamic pathfinding visualization tool built with React, HTML, and JavaScript, bringing algorithms like Dijkstra, A (Astar), DFS, and BFS to life. This interactive project helps users understand how different pathfinding techniques work by visualizing their step-by-step process in real time.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: "/images/project1img.png", 
    video: "/videos/project1.mp4", 
    link: "https://pathfinder-visualizer-iota.vercel.app/",
    github: "https://github.com/yares28/Pathfinder-Visualizer"
  },
  {
    title: "ScrapedIn",
    description: "A web platform designed to help users track and manage their job applications on LinkedIn. It lets you register each application, organize them into your own categories, and monitor the progress of each submission. While it might not be the most advanced scraper out there, it offers a straightforward and accessible solution that gets the job done without overcomplicating the process.",
    technologies: ["JavaScript", "Python", "HTML", "CSS"],
    image: "/images/project2img.png", 
    video: "/videos/project2.mp4", 
    link: "https://spraped-in.vercel.app/",
    github: "https://github.com/yares28/Linkedin-Tracker"
  },
  {
    title: "To be announced...",
    description: "To be described...",
    technologies: ["To be built..."],
    image: "/images/project3img.png", 
    video: "/videos/project3.mp4",
    link: "#",
    github: "https://github.com/yares28"
  },
  {
    title: "To be announced...",
    description: "To be described...",
    technologies: ["To be built..."],
    image: "/images/project3img.png",   
    video: "/videos/project3.mp4", 
    link: "#",
    github: "https://github.com/yares28"
  }
]


function ProjectCard({ project, index, isHovered, onMouseEnter, onMouseLeave }) {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  

  useEffect(() => {
    if (isHovered && videoRef.current && !videoError && project.video) {
      try {
        // Reset video to beginning
        videoRef.current.currentTime = 0;
        // Play video once
        videoRef.current.play().catch(err => {
          console.log("Video play error:", err);
          setVideoError(true);
        });
      } catch (error) {
        console.log("Video error:", error);
        setVideoError(true);
      }
    }
  }, [isHovered, project.video, videoError]);
  

  const handleVideoError = () => {
    console.log("Failed to load video:", project.video);
    setVideoError(true);
  };
  
  
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  
  return (
    <div 
      className="bg-card rounded-lg overflow-hidden shadow-md animate-in transition-all duration-300"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-48 bg-muted-foreground/20 relative overflow-hidden">
        {/* Project image */}
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              opacity: (isHovered && project.video && !videoError) ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out, transform 0.5s ease-in-out',
              transform: isHovered ? 'scale(1.15)' : 'scale(1)',
              objectPosition: 'center'
            }}
          />
        )}
        
        
        {project.video && !videoError && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover absolute top-0 left-0"
            src={project.video}
            muted
            playsInline
            onError={handleVideoError}
            onEnded={handleVideoEnded}
            style={{
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        )}
        
        
        {!project.image && (
          <div className="text-4xl font-bold text-primary/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {project.title.substring(0, 2)}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="section bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  ) //hola
} 