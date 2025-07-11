"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

interface TechIconProps {
  name: string
  icon: string
}

export default function TechIcon({ name, icon }: TechIconProps) {
  const { theme } = useTheme()
  const [error, setError] = useState(false)

  // Fallback to a colored box with text if image fails to load
  const handleError = () => {
    setError(true)
  }

  return (
    <motion.div whileHover={{ y: -5, scale: 1.05 }} className="flex flex-col items-center flex-shrink-0">
      <div className="w-10 h-10 md:w-16 md:h-16 bg-background/50 backdrop-blur-sm rounded-full p-2 md:p-3 border border-border flex items-center justify-center">
        {error ? (
          <div className="w-full h-full flex items-center justify-center bg-primary/20 rounded-full">
            <span className="text-xs font-bold">{name.substring(0, 2)}</span>
          </div>
        ) : (
          <img
            src={icon || "/placeholder.svg"}
            alt={name}
            className={`w-full h-full object-contain ${theme === "dark" ? "dark:invert" : ""}`}
            onError={handleError}
          />
        )}
      </div>
      <span className="text-[10px] md:text-xs mt-1 md:mt-2 text-foreground/70">{name}</span>
    </motion.div>
  )
}

