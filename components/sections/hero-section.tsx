"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Code } from "lucide-react"
import { motion } from "framer-motion"
import { Typewriter } from "@/components/typewriter"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000 animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500 animate-float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="secondary" className="mt-20 sm:mt-[0px] mb-4 text-sm px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              Available for opportunities
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <div className="flex flex-col items-center justify-center">
              <span className="mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <Typewriter text="Shabdpreet Singh" delay={100} />
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with modern web technologies. Currently pursuing
            BCA and building innovative full-stack applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            {/* <Badge variant="secondary"> */}
            <Button
              // color="transparent"
              size="lg"
              className="text-lg bg-transparent text-white hover:text-black  border border-white   px-8 py-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={scrollToAbout}
            >

              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            {/* </Badge> */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="https://github.com/shabdpreetz" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="https://linkedin.com/in/shabdpreet-singh-10a877323" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            <div className="text-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
              <div className="text-2xl font-bold text-primary">60+</div>
              <div className="text-sm text-muted-foreground">LeetCode Problems</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
              <div className="text-2xl font-bold text-primary">80+</div>
              <div className="text-sm text-muted-foreground">GeeksForGeeks</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
              <div className="text-2xl font-bold text-primary">5th</div>
              <div className="text-sm text-muted-foreground">BCA Semester</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </motion.div>
    </section>
  )
}
