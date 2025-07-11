"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "@/components/section-heading"
import { Award } from "lucide-react"
import Image from "next/image"

export default function Certifications() {
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

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2022",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Google Cloud Professional Developer",
      organization: "Google Cloud",
      date: "2021",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      organization: "Microsoft",
      date: "2020",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Certified Kubernetes Administrator",
      organization: "Cloud Native Computing Foundation",
      date: "2021",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "React Developer Certification",
      organization: "Meta",
      date: "2019",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Professional Scrum Master I",
      organization: "Scrum.org",
      date: "2018",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Certifications" subtitle="Professional Credentials" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all flex items-center"
            >
              <div className="mr-4 flex-shrink-0">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.organization}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-foreground/70 text-sm">{cert.organization}</p>
                <div className="flex items-center mt-2 text-xs text-foreground/60">
                  <Award className="h-3 w-3 mr-1" />
                  <span>Issued {cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

