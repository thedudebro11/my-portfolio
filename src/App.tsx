"use client"

import { useEffect } from "react"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import ProjectsSection from "./components/projects-section"
import SkillsSection from "./components/skills-section"
import ContactSection from "./components/ContactSection"
import Footer from "./components/footer"
import ThemeToggle from "./components/theme-toggle"

function App() {
  useEffect(() => {
    // Check if dark mode is enabled
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ThemeToggle />
    </div>
  )
}

export default App
