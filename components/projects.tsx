"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "./section-heading"
import { getProjects } from "@/lib/data"
import { DialogTitle } from "@radix-ui/react-dialog"

const projects = getProjects()

// Device frames for different project types
const DeviceFrame = ({ frameType, image, alt }: { frameType: string; image: string; alt: string }) => {
  switch (frameType) {
    case "laptop":
      return (
        <div className="laptop-frame relative mx-auto w-full max-w-3xl">
          <div className="relative bg-gray-900 rounded-t-xl overflow-hidden pt-4 shadow-xl border-4 border-gray-800">
            <div className="absolute top-0 inset-x-0 h-4 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image || "/images/placeholder-project.jpeg"}
                alt={alt}
                width={1200}
                height={675}
                className="w-full h-full object-cover shadow-inner rounded-md"
              />
            </div>
            <div className="h-4 bg-gray-800 rounded-b-lg"></div>
          </div>
          <div className="h-3 bg-gray-700 rounded-b-xl mx-auto "></div>
        </div>
      )
    case "mobile":
      return (
        <div className="mobile-frame relative mx-auto w-full max-w-[280px]">
          <div className="relative bg-gray-900 rounded-[2rem] overflow-hidden border-[10px] border-gray-800 shadow-xl">
            <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-center">
              <div className="w-20 h-4 rounded-b-xl bg-gray-800 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              </div>
            </div>
            <div className="relative aspect-[9/19] overflow-hidden">
              <Image
                src={image || "/images/placeholder-project.jpeg"}
                alt={alt}
                width={450}
                height={950}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1 my-2 w-16 bg-gray-700 rounded-full mx-auto"></div>
          </div>
        </div>
      )
    case "desktop":
    default:
      return (
        <div className="desktop-frame relative mx-auto w-full max-w-4xl">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl border-4 border-gray-800">
            <div className="bg-gray-800 h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto bg-gray-700 rounded-full h-5 w-1/2"></div>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image || "/images/placeholder-project.jpeg"}
                alt={alt}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )
  }
}

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(projects[0])

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setOpen(true)
  }

  return (
    <section id="projects" className="container py-20 scroll-mt-28 px-4 sm:px-6">
      <SectionHeading title="My Projects" subtitle="Recent Work" />

      {/* Coming Soon Section */}
      <div className="mt-10 flex justify-center">
        <div className="rounded-2xl border border-border bg-muted/30 px-8 py-10 text-center shadow-md">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Projects Coming Soon
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-4">
            We’re currently curating and adding exciting projects to showcase here.
            Check back soon to explore them!
          </p>
          <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full">
            Coming Soon
          </Badge>
        </div>
      </div>

      {/* Future Grid (Commented out until projects are ready) */}
      {/*
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card rounded-xl overflow-hidden shadow-md border border-border h-[400px] flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/30 cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/images/placeholder-project.jpeg"}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-1 mt-auto mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.tags.length - 4}
                  </Badge>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:border-primary/50 group-hover:bg-primary/5"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <DialogTitle className="text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
            <div className="flex gap-2">
              {selectedProject?.liveUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                </Button>
              )}
              {selectedProject?.githubUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="overflow-y-auto pr-2 flex-1 dialog-content">
            <div className="mb-6">
              <DeviceFrame
                frameType={selectedProject?.frameType || "desktop"}
                image={selectedProject?.image || ""}
                alt={selectedProject?.title || ""}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground mb-2">{selectedProject?.shortDescription}</p>
                <p className="text-muted-foreground">{selectedProject?.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {selectedProject?.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Challenges & Solutions</h3>
                <p className="text-muted-foreground">{selectedProject?.challenges}</p>
              </div>

              {selectedProject?.images && selectedProject.images.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Additional Screenshots</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.images.map((img, index) => (
                      <div key={index} className="rounded-lg overflow-hidden border border-border">
                        <Image
                          src={img || "/images/placeholder-project.jpeg"}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          width={500}
                          height={300}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
