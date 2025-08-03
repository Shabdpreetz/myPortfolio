"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        // { name: "TypeScript", level: 80, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 88, color: "bg-teal-500" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 82, color: "bg-green-600" },
        { name: "Express.js", level: 78, color: "bg-gray-700" },
        { name: "MongoDB", level: 75, color: "bg-green-500" },
        // { name: "PostgreSQL", level: 70, color: "bg-blue-700" },
      ],
    },
    {
      title: "Tools & Libraries",
      skills: [
        { name: "Redux Toolkit", level: 85, color: "bg-purple-600" },
        { name: "TanStack Query", level: 80, color: "bg-red-500" },
        { name: "Material-UI", level: 88, color: "bg-blue-500" },
        { name: "shadcn/ui", level: 90, color: "bg-gray-900" },
      ],
    },
  ]

  const technologies = [
    "React",
    "Next.js",
    // "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    // "PostgreSQL",
    "Redux Toolkit",
    "TanStack Query",
    "Material-UI",
    "shadcn/ui",
    "Tailwind CSS",
    "Git",
    // "Docker",
    // "AWS",
    "Vercel",
    "C++",
    "JavaScript",
    "HTML5",
    "CSS3",
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills & Technologies
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build scalable, performant, and
            user-friendly applications.
          </p>
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={inView ? skill.level : 0} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
