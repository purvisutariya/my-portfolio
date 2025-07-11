"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-primary font-medium mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold relative inline-block"
      >
        {title}
        <motion.span
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary to-purple-500"
        />
      </motion.h2>
    </div>
  )
}

