"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)


const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleSectionChange = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleSectionChange)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleSectionChange)
    }
  }, [])

  // const scrollToSection = (href: string) => {
  //   const element = document.getElementById(href.slice(1))
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" })
  //   }
  // }

  const scrollToSection = (href: string) => {
  const target = document.getElementById(href.slice(1))
  const navOffset = document.querySelector("nav")?.offsetHeight || 0

  if (target) {
    gsap.to(window, {
      duration: 0,
      scrollTo: { y: target, offsetY: navOffset },
      ease: "power1.out",
    })
  }
}


  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#home")
            }}
          >
            Shabdpreet Singh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="/cv.pdf" download="Shabdpreet_Singh_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary p-2 rounded-md",
                        activeSection === item.href.slice(1) ? "text-primary bg-primary/10" : "text-muted-foreground",
                      )}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4" asChild>
                    <a href="/cv.pdf" download="Shabdpreet_Singh_CV.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
