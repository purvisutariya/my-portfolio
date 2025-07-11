"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import dynamic from "next/dynamic"

// Dynamically import the Particles component with no SSR
const ParticlesComponent = dynamic(() => import("@tsparticles/react").then((mod) => mod.Particles), { ssr: false })

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Dynamically import tsparticles to avoid SSR issues
    const loadParticles = async () => {
      try {
        const { loadSlim } = await import("@tsparticles/slim")
        const { initParticlesEngine } = await import("@tsparticles/react")

        await initParticlesEngine(async (engine) => {
          await loadSlim(engine)
        })

        setInit(true)
      } catch (error) {
        console.error("Failed to load particles:", error)
      }
    }

    loadParticles()
  }, [])

  if (!init) return null

  return (
    <ParticlesComponent
      className="fixed inset-0 -z-10"
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: theme === "dark" ? "#ffffff" : "#000000",
          },
          links: {
            color: theme === "dark" ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40, // Reduced for better performance
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

