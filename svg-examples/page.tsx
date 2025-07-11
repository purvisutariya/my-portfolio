import SvgExamples from "@/components/svg-examples"
import SvgSpriteExample from "@/components/svg-sprite-example"
import SvgComponentExample from "@/components/svg-component-example"
import SpriteIconDemo from "@/components/sprite-icon-demo"

export default function SvgExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">SVG Usage Examples in Next.js</h1>

      <div className="space-y-8">
        <SvgExamples />
        <SvgSpriteExample />
        <SpriteIconDemo />
        <SvgComponentExample />

        <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting SVG Issues</h2>

          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Common SVG Issues</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Path resolution:</strong> Make sure SVGs are in the public folder and paths start with "/"
                </li>
                <li>
                  <strong>CORS issues:</strong> When using SVGs from external sources, you might face CORS restrictions
                </li>
                <li>
                  <strong>SVG optimization:</strong> Large or complex SVGs might need optimization with tools like SVGO
                </li>
                <li>
                  <strong>
                  
                  
                  </strong> Use the dark:invert class for simple color inversion in dark mode
                </li>
              </ul>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Best Practices</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>For UI icons:</strong> Use inline SVGs or SVG sprites for best control and performance
                </li>
                <li>
                  <strong>For illustrations:</strong> Use the Image component or img tag for simpler implementation
                </li>
                <li>
                  <strong>For dynamic SVGs:</strong> Use SVG as React components with SVGR for full control
                </li>
                <li>
                  <strong>For many icons:</strong> Use an SVG sprite to reduce HTTP requests and improve performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

