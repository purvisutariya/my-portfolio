"use client"

import { getPersonalInfo, getCV } from "@/lib/data"
import ShapesBackground from "./shapes-background"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import AnimatedTagline from "./animated-tagline"
import Image from "next/image"

// Update the AutoScrollingTechIcons component
function AutoScrollingTechIcons() {
  const techIcons = [
    // Frontend
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },

    // Backend
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "NestJS", icon: "/icons/nestjs.svg" },

    // Cloud & Deployment
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Google Cloud", icon: "/icons/google-cloud.svg" },
    { name: "Vercel", icon: "/icons/vercel.svg" },

    // Databases
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },

    // Payment & Third-party
    { name: "Stripe", icon: "/icons/stripe.svg" },
    { name: "PayPal", icon: "/icons/paypal.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "GraphQL", icon: "/icons/graphql.svg" },
    { name: "Socket.io", icon: "/icons/socketio.svg" },

    // Tools & Others
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Webpack", icon: "/icons/webpack.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="mt-6 md:mt-8 mb-8 md:mb-12 overflow-hidden relative w-full"
    >
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 bg-gradient-to-r from-background to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10 bg-gradient-to-l from-background to-transparent"></div>

      <div className="flex gap-4 md:gap-8 animate-scroll-left py-4 w-full">
        {[...techIcons, ...techIcons].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="w-10 h-10 md:w-16 md:h-16 bg-background/50 backdrop-blur-sm rounded-full p-2 md:p-3 border border-border flex items-center justify-center">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={40}
                height={40}
                className="dark:invert"
              />
            </div>
            <span className="text-[10px] md:text-xs mt-1 md:mt-2 text-foreground/70">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const personalInfo = getPersonalInfo()
  const cv = getCV()

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden px-4 sm:px-6"
    >
      <ShapesBackground />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-grow z-10 pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-7xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 text-sm md:text-base">
              {personalInfo.experienceYears} Years of Experience in Web Development
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>

          <AnimatedTagline />

          <AutoScrollingTechIcons />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {/* Update the View Projects button */}
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] border-none"
              onClick={() => {
                const projectsSection = document.getElementById("projects")
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <span className="relative z-10 flex items-center text-white">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            {/* Update the Download CV button */}
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 sm:px-8 py-2.5 sm:py-3 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] border-none"
              onClick={() => {
                // Open CV in a new tab
                window.open(cv, "_blank")
              }}
            >
              <span className="relative z-10 flex items-center text-white">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Download CV
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <Link href="#about" className="flex flex-col items-center">
            <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

