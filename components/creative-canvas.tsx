"use client"

import { useState, useRef, Suspense, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  Text,
  Float,
  Html,
  Stars,
  Cloud,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { getSkills } from "@/lib/data"
import { useTheme } from "@/components/theme-provider"

function FloatingSkillSpheres() {
  const skills = getSkills().technical.slice(0, 8)
  const colors = [
    "#9333ea", // purple
    "#ec4899", // pink
    "#3b82f6", // blue
    "#10b981", // emerald
    "#f59e0b", // amber
    "#8b5cf6", // violet
    "#06b6d4", // cyan
    "#ef4444", // red
  ]

  return (
    <>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2
        const radius = 4
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <group key={skill.name} position={[x, 0, z]}>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                  color={colors[index]}
                  attach="material"
                  distort={0.3}
                  speed={2}
                  roughness={0.2}
                  metalness={0.8}
                />
              </Sphere>
              <Text
                font="/fonts/Inter_Bold.json"
                position={[0, 0, 0]}
                fontSize={0.4}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                maxWidth={2}
                textAlign="center"
              >
                {skill.name}
              </Text>
            </Float>
          </group>
        )
      })}
    </>
  )
}

function AnimatedRing({ radius, color, speed, thickness = 0.1, segments = 64 }) {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.3
    ref.current.rotation.y = t * 0.2
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 16, segments]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  )
}

function AnimatedSphere({ position, color, size = 1, speed = 1 }) {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.position.y = position[1] + Math.sin(t) * 0.5
    ref.current.rotation.x = t * 0.5
    ref.current.rotation.z = t * 0.3
  })

  return (
    <mesh ref={ref} position={position} castShadow>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

function CreativeScene() {
  const [active, setActive] = useState(false)
  const { theme } = useTheme()
  const { camera } = useThree()

  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 0, 8)
  }, [camera])

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[0, 10, 0]} intensity={1} castShadow />

      {/* Animated rings */}
      <AnimatedRing radius={6} color="#9333ea" speed={0.5} thickness={0.05} />
      <AnimatedRing radius={5} color="#ec4899" speed={0.7} thickness={0.05} />
      <AnimatedRing radius={4} color="#3b82f6" speed={0.9} thickness={0.05} />

      {/* Floating skill spheres */}
      <FloatingSkillSpheres />

      {/* Central interactive element */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={theme === "dark" ? "#9333ea" : "#8b5cf6"}
            attach="material"
            distort={active ? 0.6 : 0.3}
            speed={active ? 4 : 2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>

        <Html position={[0, 0, 0]} center transform>
          <div className="bg-background/80 backdrop-blur-md p-4 rounded-lg border border-primary/20 shadow-xl w-64 text-center">
            <h3 className="font-bold text-lg mb-2">Interactive 3D Skills</h3>
            <p className="text-sm text-foreground/80 mb-3">
              Drag to rotate and explore my technical skills in 3D space
            </p>
            <Button size="sm" onClick={() => setActive(!active)} className="w-full bg-primary hover:bg-primary/90">
              {active ? "Amazing!" : "Activate Effect"}
            </Button>
          </div>
        </Html>
      </Float>

      {/* Background stars */}
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      {/* Decorative clouds */}
      <Cloud position={[-4, -2, -5]} speed={0.2} opacity={0.2} />
      <Cloud position={[4, 2, -5]} speed={0.2} opacity={0.2} />
    </>
  )
}

export default function CreativeCanvas() {
  return (
    <div className="h-[500px] rounded-xl overflow-hidden border border-border">
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center bg-background/30 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-foreground/70">Loading 3D experience...</p>
            </div>
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <CreativeScene />
        </Canvas>
      </Suspense>
    </div>
  )
}

