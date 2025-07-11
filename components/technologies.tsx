"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "@/components/section-heading"
import { getSkills } from "@/lib/data"
import { Code, Database, Layout, Globe, Server, Users, LineChart, Shield } from "lucide-react"

export default function Technologies() {
  const skills = getSkills()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Define icons for skill categories
  const skillIcons = {
    Frontend: <Layout className="h-5 w-5 text-blue-500" />,
    Backend: <Server className="h-5 w-5 text-green-500" />,
    Database: <Database className="h-5 w-5 text-orange-500" />,
    DevOps: <Shield className="h-5 w-5 text-purple-500" />,
    Mobile: <Globe className="h-5 w-5 text-red-500" />,
    API: <Code className="h-5 w-5 text-yellow-500" />,
    Analytics: <LineChart className="h-5 w-5 text-cyan-500" />,
    Management: <Users className="h-5 w-5 text-indigo-500" />,
  }

  return (
    <section id="technologies" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Technologies" subtitle="My Tech Stack" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {skills.technical.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-sm text-primary">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-6">Professional Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.professional.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-background/80 border border-border mr-4">
                    {skillIcons[skill.name.split(" ")[0]] || <Code className="h-5 w-5 text-primary" />}
                  </div>
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">Proficiency</span>
                    <span className="font-medium">{skill.value}%</span>
                  </div>

                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.value}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-1 rounded-full mr-1 ${
                          i < Math.floor(skill.value / 20) ? "bg-gradient-to-r from-blue-500 to-cyan-400" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

