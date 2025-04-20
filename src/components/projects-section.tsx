"use client"

import { useState } from "react"

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A responsive admin dashboard for managing products, orders, and customers with dark mode support.",
      tags: ["React", "Tailwind CSS", "Chart.js"],
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application with location detection and 5-day forecast visualization.",
      tags: ["React", "API", "Tailwind CSS"],
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management platform with drag-and-drop interface and team permissions.",
      tags: ["React", "TypeScript", "Firebase"],
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 4,
      title: "Personal Blog",
      description: "Minimalist blog with markdown support, code syntax highlighting, and responsive design.",
      tags: ["React", "MDX", "Tailwind CSS"],
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
  ]

  const filters = ["All", "React", "Tailwind CSS", "TypeScript", "API", "Firebase"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent works. Each project was carefully crafted with attention to detail.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
