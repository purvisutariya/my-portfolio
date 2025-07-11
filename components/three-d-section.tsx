"use client"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import Image from "next/image"

export default function ThreeDSection() {
  return (
    <section id="3d-skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Interactive Experience" subtitle="3D Skills Showcase" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="relative h-[500px] rounded-xl overflow-hidden border border-border bg-background/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-md px-4">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                  <div className="relative z-10 w-full h-full rounded-full bg-primary/30 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="3D Icon"
                      width={60}
                      height={60}
                      className="opacity-70"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">3D Visualization Skills</h3>
                <p className="text-foreground/70 mb-6">
                  Creating immersive 3D experiences using Three.js, React Three Fiber, and WebGL technologies to build
                  engaging interactive web applications.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Three.js", "React Three Fiber", "WebGL", "3D Modeling", "Animation"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated background elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-lg bg-blue-500/20 animate-float-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full bg-purple-500/20 animate-float-slow-delay"></div>
            <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-lg bg-cyan-500/20 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 left-1/3 w-14 h-14 rounded-full bg-primary/20 animate-pulse-slow-delay"></div>
          </div>

          <p className="text-center text-foreground/70 mt-4">
            This showcase demonstrates my ability to create engaging web experiences using 3D technologies and
            interactive animations
          </p>
        </motion.div>
      </div>
    </section>
  )
}

