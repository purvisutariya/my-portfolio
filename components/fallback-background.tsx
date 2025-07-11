"use client"

import { useTheme } from "@/components/theme-provider"

// A simple fallback background in case the particles don't load
export default function FallbackBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, ${theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"} 2px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[150px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[150px] opacity-30" />
    </div>
  )
}

