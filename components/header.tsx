"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { getPersonalInfo } from "@/lib/data"

export default function Header() {
  const personalInfo = getPersonalInfo()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"])

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setIsScrolled(value > 10)
    })
    return () => unsubscribe()
  }, [scrollY])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      style={{ backgroundColor }}
      className="absolute top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
        >
          <Link href="/">MB</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item, index) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
                {item.name}
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </motion.nav>

        {/* Mobile - Only Theme Toggle */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}

