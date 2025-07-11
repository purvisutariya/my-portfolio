"use client"

import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Float, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { getSkills } from "@/lib/data"

function ColorfulSphere({ position, color, size = 1, speed = 1 }) {
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

function ColorfulBox({ position, color, size = 1, speed = 1 }) {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.rotation.x = t * 0.3
    ref.current.rotation.y = t * 0.4
    ref.current.rotation.z = t * 0.2
  })

  return (
    <mesh ref={ref} position={position} castShadow>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

function ColorfulTorus({ position, color, size = 1, speed = 1 }) {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.rotation.x = t * 0.2
    ref.current.rotation.y = t * 0.5
  })

  return (
    <mesh ref={ref} position={position} castShadow>
      <torusGeometry args={[size, size / 3, 16, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

function FloatingSkills() {
  const skills = getSkills().technical.slice(0, 8)
  const colors = ["#9333ea", "#ec4899", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#06b6d4", "#ef4444"]

  return (
    <>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2
        const radius = 4
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <Float key={skill.name} speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Text
              font="/fonts/Inter_Bold.json"
              position={[x, 0, z]}
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
        )
      })}
    </>
  )
}

function Experience() {
  const [active, setActive] = useState(false)

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[0, 10, 0]} intensity={1} castShadow />

      {/* Colorful 3D objects */}
      <ColorfulSphere position={[-2, 0, -2]} color="#9333ea" size={1.2} speed={0.8} />
      <ColorfulBox position={[2, 0, 2]} color="#ec4899" size={1.5} speed={1.2} />
      <ColorfulTorus position={[0, 0, -3]} color="#3b82f6" size={1.3} speed={1} />
      <ColorfulSphere position={[3, 0, -1]} color="#10b981" size={0.8} speed={1.5} />
      <ColorfulBox position={[-3, 0, 1]} color="#f59e0b" size={1} speed={0.7} />
      <ColorfulTorus position={[0, 0, 3]} color="#8b5cf6" size={1.1} speed={1.3} />

      <FloatingSkills />

      <Html position={[0, 2.5, 0]} center>
        <div className="bg-background/80 backdrop-blur-md p-4 rounded-lg border border-primary/20 shadow-xl w-64 text-center">
          <h3 className="font-bold text-lg mb-2">Interactive 3D Skills</h3>
          <p className="text-sm text-foreground/80 mb-3">Drag to rotate and explore my technical skills in 3D space</p>
          <Button size="sm" onClick={() => setActive(!active)} className="w-full">
            {active ? "Awesome!" : "Click Me!"}
          </Button>
        </div>
      </Html>
    </>
  )
}

export default function ThreeCanvas() {
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
          <Experience />
        </Canvas>
      </Suspense>
    </div>
  )
}

