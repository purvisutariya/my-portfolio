"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code, Users, Lightbulb, Brain } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { getAboutInfo, getPersonalInfo } from "@/lib/data"

export default function About() {
  const aboutInfo = getAboutInfo()
  const personalInfo = getPersonalInfo()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "code":
        return <Code className="h-5 w-5" />
      case "users":
        return <Users className="h-5 w-5" />
      case "brain":
        return <Brain className="h-5 w-5" />
      case "lightbulb":
        return <Lightbulb className="h-5 w-5" />
      default:
        return <Code className="h-5 w-5" />
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My Introduction" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center mt-16"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src={aboutInfo.profileImg}
                alt="Developer Portrait"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl -z-10"></div>
          </motion.div>

          <div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Tech Lead & Full Stack Developer with {personalInfo.experienceYears} Years Experience</h3>
            </motion.div>

            {aboutInfo.description.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants} className="text-foreground/80 mb-6">
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mb-8">
              {aboutInfo.qualities.map((quality, index) => (
                <div key={index} className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      {getIconComponent(quality.icon)}
                    </div>
                    <div className="font-bold">{quality.title}</div>
                  </div>
                  <div className="text-sm text-foreground/70">{quality.description}</div>
                </div>
              ))}
            </motion.div>

            {/* Removed the Read More button */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

