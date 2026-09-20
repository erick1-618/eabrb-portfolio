import React from 'react';
import './App.css';
import ConwayBackground from './components/ConwayBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PinnedProjects from './components/PinnedProjects';
import ExperienceSkills from './components/ExperienceSkills';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Background Conway Game of Life Canvas */}
      <ConwayBackground />

      {/* Main Foreground Application */}
      <div className="app-content">
        <Navbar />
        <main>
          <Hero />
          <ExperienceSkills />
          <PinnedProjects />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
