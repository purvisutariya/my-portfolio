"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"

export default function ShapesBackground() {
  const { theme } = useTheme()
  const canvasRef = useRef(null)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  })

  // Shapes configuration
  const shapes = [
    { type: "circle", color: "#9333ea", size: 40 },
    { type: "triangle", color: "#ec4899", size: 50 },
    { type: "square", color: "#3b82f6", size: 35 },
    { type: "pentagon", color: "#10b981", size: 45 },
    { type: "star", color: "#f59e0b", size: 30 },
    { type: "hexagon", color: "#8b5cf6", size: 40 },
    { type: "circle", color: "#06b6d4", size: 25 },
    { type: "triangle", color: "#ef4444", size: 35 },
  ]

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add resize listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const particles = []

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = windowSize.width
      canvas.height = windowSize.height
    }

    setCanvasSize()

    // Determine number of particles based on screen size
    const getParticleCount = () => {
      if (windowSize.width < 480) return 5 // Mobile
      if (windowSize.width < 768) return 8 // Tablet
      return 12 // Desktop
    }

    // Scale shape size based on screen width
    const getShapeSize = (baseSize) => {
      if (windowSize.width < 480) return baseSize * 0.6
      if (windowSize.width < 768) return baseSize * 0.8
      return baseSize
    }

    // Create particles - REDUCED NUMBER BASED ON SCREEN SIZE
    for (let i = 0; i < getParticleCount(); i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)]
      const scaledSize = getShapeSize(shape.size)

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.3, // Reduced speed for mobile
        speedY: (Math.random() - 0.5) * 0.3, // Reduced speed for mobile
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.3, // Reduced rotation speed
        shape: shape.type,
        color: shape.color,
        size: scaledSize * (Math.random() * 0.5 + 0.5),
        opacity: Math.random() * 0.4 + 0.1, // Slightly reduced opacity
      })
    }

    // Draw shapes
    const drawShape = (particle) => {
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate((particle.rotation * Math.PI) / 180)
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color

      switch (particle.shape) {
        case "circle":
          ctx.beginPath()
          ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2)
          ctx.fill()
          break

        case "square":
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
          break

        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -particle.size / 2)
          ctx.lineTo(particle.size / 2, particle.size / 2)
          ctx.lineTo(-particle.size / 2, particle.size / 2)
          ctx.closePath()
          ctx.fill()
          break

        case "pentagon":
          ctx.beginPath()
          for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
            const x = (particle.size / 2) * Math.cos(angle)
            const y = (particle.size / 2) * Math.sin(angle)
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.fill()
          break

        case "hexagon":
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (i * 2 * Math.PI) / 6
            const x = (particle.size / 2) * Math.cos(angle)
            const y = (particle.size / 2) * Math.sin(angle)
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.fill()
          break

        case "star":
          ctx.beginPath()
          for (let i = 0; i < 10; i++) {
            const angle = (i * Math.PI) / 5 - Math.PI / 2
            const radius = i % 2 === 0 ? particle.size / 2 : particle.size / 4
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.fill()
          break
      }

      ctx.restore()
    }

    // Animation loop with requestAnimationFrame for better performance
    let animationFrameId

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Boundary check with padding to prevent shapes from getting stuck at edges
        const padding = particle.size
        if (particle.x < -padding) particle.x = canvas.width + padding
        if (particle.x > canvas.width + padding) particle.x = -padding
        if (particle.y < -padding) particle.y = canvas.height + padding
        if (particle.y > canvas.height + padding) particle.y = -padding

        // Draw
        drawShape(particle)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [windowSize, theme])

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-background via-background/95 to-background/90 animate-gradient-slow"></div>
      <div className="fixed inset-0 -z-20 opacity-30 pointer-events-none">
        {/* Reduced size and blur for mobile */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/20 rounded-full filter blur-[10vw] md:blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-500/20 rounded-full filter blur-[10vw] md:blur-[150px] animate-pulse-slow-delay"></div>
        <div className="absolute top-1/2 left-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-blue-500/20 rounded-full filter blur-[8vw] md:blur-[150px] animate-pulse-slow-delay-2"></div>

        {/* Additional animated gradients - hidden on small screens */}
        <div className="hidden sm:block absolute top-1/3 right-1/4 w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] bg-cyan-500/10 rounded-full filter blur-[8vw] md:blur-[120px] animate-float-slow"></div>
        <div className="hidden sm:block absolute bottom-1/4 right-1/3 w-[20vw] h-[20vw] max-w-[250px] max-h-[250px] bg-pink-500/10 rounded-full filter blur-[6vw] md:blur-[100px] animate-float-slow-delay"></div>
      </div>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 touch-none" />
    </>
  )
}

