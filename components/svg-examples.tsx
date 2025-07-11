"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SvgExamples() {
  const [activeTab, setActiveTab] = useState("image")

  // Example SVG as a string for inline usage
  const reactLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>`

  return (
    <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-xl">
      <h2 className="text-2xl font-bold mb-6">SVG Usage Examples</h2>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="image">As Image</TabsTrigger>
          <TabsTrigger value="background">As Background</TabsTrigger>
          <TabsTrigger value="inline">Inline SVG</TabsTrigger>
          <TabsTrigger value="object">As Object</TabsTrigger>
        </TabsList>

        <TabsContent value="image" className="space-y-4">
          <h3 className="text-lg font-semibold">Using Next.js Image Component</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <Image src="/icons/react.svg" alt="React Logo" width={80} height={80} className="mb-2" />
              <p className="text-sm text-center">Standard Image</p>
            </div>

            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <Image src="/icons/react.svg" alt="React Logo" width={80} height={80} className="mb-2 dark:invert" />
              <p className="text-sm text-center">With dark:invert</p>
            </div>

            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <Image
                src="/icons/react.svg"
                alt="React Logo"
                width={80}
                height={80}
                className="mb-2 filter hue-rotate-90"
              />
              <p className="text-sm text-center">With filters</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-mono">
              {`<Image src="/icons/react.svg" alt="React Logo" width={80} height={80} />`}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="background" className="space-y-4">
          <h3 className="text-lg font-semibold">Using SVG as Background Image</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <div
                className="w-20 h-20 mb-2"
                style={{
                  backgroundImage: `url(/icons/react.svg)`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <p className="text-sm text-center">Standard background</p>
            </div>

            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <div
                className="w-20 h-20 mb-2 dark:invert"
                style={{
                  backgroundImage: `url(/icons/react.svg)`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <p className="text-sm text-center">With dark:invert</p>
            </div>

            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <div
                className="w-20 h-20 mb-2"
                style={{
                  backgroundImage: `url(/icons/react.svg)`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "hue-rotate(90deg)",
                }}
              />
              <p className="text-sm text-center">With filters</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-mono">
              {`<div style={{ backgroundImage: \`url(/icons/react.svg)\`, backgroundSize: 'contain' }} />`}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="inline" className="space-y-4">
          <h3 className="text-lg font-semibold">Using Inline SVG</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <div className="w-20 h-20 mb-2" dangerouslySetInnerHTML={{ __html: reactLogoSvg }} />
              <p className="text-sm text-center">Inline with dangerouslySetInnerHTML</p>
            </div>

            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-20 h-20 mb-2">
                <title>React Logo</title>
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              <p className="text-sm text-center">Direct SVG element</p>
            </div>

            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
                className="w-20 h-20 mb-2 dark:invert"
              >
                <title>React Logo</title>
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              <p className="text-sm text-center">With dark:invert</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-mono">
              {`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
  <title>React Logo</title>
  <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
  <g stroke="#61dafb" strokeWidth="1" fill="none">
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </g>
</svg>`}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="object" className="space-y-4">
          <h3 className="text-lg font-semibold">Using SVG as Object</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <object data="/icons/react.svg" type="image/svg+xml" className="w-20 h-20 mb-2" />
              <p className="text-sm text-center">Standard object</p>
            </div>

            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <img src="/icons/react.svg" alt="React Logo" className="w-20 h-20 mb-2" />
              <p className="text-sm text-center">Standard img tag</p>
            </div>

            <div className="p-4 border border-border rounded-lg flex flex-col items-center">
              <img src="/icons/react.svg" alt="React Logo" className="w-20 h-20 mb-2 dark:invert" />
              <p className="text-sm text-center">With dark:invert</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-mono">
              {`<object data="/icons/react.svg" type="image/svg+xml" className="w-20 h-20" />`}
            </p>
            <p className="text-sm font-mono mt-2">
              {`<img src="/icons/react.svg" alt="React Logo" className="w-20 h-20" />`}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

