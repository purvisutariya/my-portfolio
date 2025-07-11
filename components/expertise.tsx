"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "@/components/section-heading"
import { Code, Database, Layout, Globe, Server, Users, LineChart, Shield } from "lucide-react"

export default function Expertise() {
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

  const expertiseAreas = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      icon: Layout,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs with scalable architecture.",
      icon: Server,
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for performance.",
      icon: Database,
      color: "from-orange-500 to-amber-400",
    },
    {
      title: "Web Performance",
      description: "Optimizing web applications for speed, accessibility, and user experience.",
      icon: LineChart,
      color: "from-purple-500 to-violet-400",
    },
    {
      title: "Team Leadership",
      description: "Leading development teams with effective communication and agile methodologies.",
      icon: Users,
      color: "from-red-500 to-pink-400",
    },
    {
      title: "Security Implementation",
      description: "Implementing security best practices to protect applications from vulnerabilities.",
      icon: Shield,
      color: "from-indigo-500 to-blue-400",
    },
    {
      title: "API Development",
      description: "Creating RESTful and GraphQL APIs with proper documentation and testing.",
      icon: Code,
      color: "from-yellow-500 to-amber-400",
    },
    {
      title: "Global Deployment",
      description: "Deploying applications globally with CDN integration and regional optimization.",
      icon: Globe,
      color: "from-teal-500 to-green-400",
    },
  ]

  return (
    <section id="expertise" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Areas of Expertise" subtitle="What I Do Best" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${area.color}`}
              >
                <area.icon className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{area.title}</h3>
              <p className="text-foreground/70">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

