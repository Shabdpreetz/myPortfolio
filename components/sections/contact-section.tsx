"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Code, Trophy, Send, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shabdpreetz@gmail.com",
      href: "mailto:shabdpreetz@gmail.com",
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91-9877233787",
      href: "tel:+919877299787",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Amritsar, Punjab, India",
      href: "#",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "BCA 5th Semester",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/shabdpreetz",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shabdpreet-singh-10a877323",
      color: "hover:text-blue-600",
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/shabdpreetz",
      color: "hover:text-orange-500",
    },
    {
      icon: Trophy,
      label: "GeeksForGeeks",
      href: "https://geeksforgeeks.org/user/shabdpreetz",
      color: "hover:text-green-600",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-0 flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-lg hover:scale-110 transition-all duration-300 group border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-0 text-center">
                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                          <social.icon
                            className={`h-8 w-8 mx-auto mb-2 transition-all duration-300 group-hover:scale-110 ${social.color}`}
                          />
                          <p className="font-medium group-hover:text-primary transition-colors">{social.label}</p>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Start a Project?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm currently available for freelance work and full-time opportunities. Whether you have a project in
                  mind or just want to connect, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">What I Can Help With:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full-stack web application development</li>
                      <li>• React and Next.js projects</li>
                      <li>• API development and integration</li>
                      <li>• Database design and optimization</li>
                      <li>• Code review and consultation</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-primary">Current Status:</h4>
                    <p className="text-sm text-muted-foreground">
                      Available for new projects and opportunities. Response time: Usually within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a href="mailto:shabdpreetz@gmail.com" >
                      <Send className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 bg-transparent hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="https://linkedin.com/in/shabdpreet-singh-10a877323" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
