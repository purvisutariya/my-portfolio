"use client"

import { useState, useEffect } from "react"

export default function SvgSpriteExample() {
  const [spriteLoaded, setSpriteLoaded] = useState(false)

  useEffect(() => {
    // In a real application, you would create a sprite.svg file in your public folder
    // containing all your SVG icons with <symbol> elements and IDs
    setSpriteLoaded(true)
  }, [])

  return (
    <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6">SVG Sprite Example</h2>

      <div className="space-y-4">
        <p className="text-foreground/80">
          SVG sprites allow you to define all your SVGs once and reference them throughout your application. This
          reduces HTTP requests and improves performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold mb-4">How to create an SVG sprite</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Create a sprite.svg file in your public folder</li>
              <li>Add each SVG as a {"<symbol>"} with a unique ID</li>
              <li>Reference the symbols using {'<svg><use xlinkHref="/sprite.svg#icon-id" /></svg>'}</li>
            </ol>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold mb-4">Example sprite.svg structure</h3>
            <pre className="bg-muted/50 p-3 rounded text-xs overflow-auto">
              {`<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="icon-react" viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </symbol>
  
  <symbol id="icon-vue" viewBox="0 0 261.76 226.69">
    <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
    <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
  </symbol>
</svg>`}
            </pre>
          </div>
        </div>

        <div className="p-4 border border-border rounded-lg">
          <h3 className="font-semibold mb-4">Usage in your components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted/50 p-3 rounded text-xs">
              {`<svg className="w-10 h-10">
  <use xlinkHref="/sprite.svg#icon-react" />
</svg>`}
            </div>

            <div className="flex items-center justify-center">
              {/* This would work if you had an actual sprite.svg file */}
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto">{spriteLoaded && <use xlinkHref="/sprite.svg#icon-react" />}</svg>
                <p className="text-xs mt-2">Example reference (needs actual sprite file)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

