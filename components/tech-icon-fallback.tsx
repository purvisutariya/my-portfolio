"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu, Cloud } from "lucide-react"

interface TechIconFallbackProps {
  name: string
  type?: string
}

export default function TechIconFallback({ name, type = "default" }: TechIconFallbackProps) {
  // Map tech names to icon types
  const getIcon = () => {
    // Frontend
    if (name.includes("React") || name.includes("Vue") || name.includes("Angular")) {
      return <Code className="w-6 h-6 text-blue-500" />
    }
    // Backend
    if (name.includes("Node") || name.includes("Laravel") || name.includes("Express")) {
      return <Server className="w-6 h-6 text-green-500" />
    }
    // Database
    if (name.includes("SQL") || name.includes("Mongo") || name.includes("Redis")) {
      return <Database className="w-6 h-6 text-orange-500" />
    }
    // Cloud
    if (name.includes("AWS") || name.includes("Cloud") || name.includes("Azure")) {
      return <Cloud className="w-6 h-6 text-purple-500" />
    }
    // Default
    return <Cpu className="w-6 h-6 text-primary" />
  }

  return (
    <motion.div whileHover={{ y: -5, scale: 1.05 }} className="flex flex-col items-center flex-shrink-0">
      <div className="w-10 h-10 md:w-16 md:h-16 bg-background/50 backdrop-blur-sm rounded-full p-2 md:p-3 border border-border flex items-center justify-center">
        {getIcon()}
      </div>
      <span className="text-[10px] md:text-xs mt-1 md:mt-2 text-foreground/70">{name}</span>
    </motion.div>
  )
}

