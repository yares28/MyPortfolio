import React from 'react';
import './App.css';
import { AboutSection } from './components/about-section';
import { ContactSection } from './components/contact-section';
import { EducationSection } from './components/education-section';
import { Footer } from './components/footer';
import { HeroSection } from './components/hero-section';
import { Navbar } from './components/navbar';
import { ProjectsSection } from './components/projects-section';
import { SkillsSection } from './components/skills-section';

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
