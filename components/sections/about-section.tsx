"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code2, Trophy, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: Code2,
      title: "LeetCode",
      description: "Solved 60+ C++ problems",
      color: "text-orange-500",
    },
    {
      icon: Trophy,
      title: "GeeksForGeeks ",
      description: "Solved 80+ coding problems",
      color: "text-green-500",
    },
    {
      icon: GraduationCap,
      title: "BCA Student",
      description: "Currently in 5th semester",
      color: "text-blue-500",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on full-stack mastery",
      color: "text-purple-500",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Passionate Developer & Problem Solver
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Full-Stack Developer currently pursuing my Bachelor's in Computer Applications. My journey
            in programming has been driven by curiosity and a passion for creating solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As a 5th-semester BCA student, I've immersed myself in the world of full-stack development,
                    constantly learning and applying new technologies to build meaningful projects.
                  </p>
                  <p>
                    My problem-solving skills have been honed through consistent practice on competitive programming
                    platforms, where I've tackled complex algorithmic challenges and improved my logical thinking.
                  </p>
                  <p>
                    I believe in writing clean, efficient code and creating user experiences that are both functional
                    and delightful. Every project I work on is an opportunity to learn something new and push the
                    boundaries of what's possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-0 text-center">
                    <div
                      className={`inline-flex p-3 rounded-full bg-muted mb-4 ${achievement.color} hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
