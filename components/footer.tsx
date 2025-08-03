"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, Trophy, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/shabdpreetz",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shabdpreet-singh-10a877323",
      label: "LinkedIn",
    },
    {
      icon: Code,
      href: "https://leetcode.com/shabdpreetz",
      label: "LeetCode",
    },
    {
      icon: Trophy,
      href: "https://geeksforgeeks.org/user/shabdpreetz",
      label: "GeeksForGeeks",
    },
  ]

  return (
    <footer className="border-t relative overflow-hidden bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Shabdpreet Singh
            </h3>
            <p className="text-muted-foreground text-sm">Full-Stack Developer & BCA Student</p>
            <Badge
              variant="secondary"
              className="mt-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Available for opportunities
            </Badge>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Shabdpreet Singh
            </p>
            <p className="text-xs text-muted-foreground mt-1">© {currentYear} All rights reserved.</p>
          </div>
        </div>

        {/* Bottom section */}
        {/* <div className="mt-8 pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground">Built with Next.js, shadcn/ui, and deployed on Vercel</p>
        </div> */}
      </div>
    </footer>
  )
}
