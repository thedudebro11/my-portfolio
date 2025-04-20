export default function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 70 },
        { name: "Vite", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Responsive Design", level: 90 },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16">
            Here's my technical toolkit that I've developed over the years
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-teal-400 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
