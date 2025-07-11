"use client"

export default function SpriteIconDemo() {
  return (
    <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6">Using the SVG Sprite</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border border-border rounded-lg flex flex-col items-center">
          <svg className="w-16 h-16 text-blue-500">
            <use xlinkHref="/sprite.svg#icon-react" />
          </svg>
          <p className="mt-2 text-sm">React Icon</p>
          <code className="text-xs mt-1 bg-muted/50 p-1 rounded">icon-react</code>
        </div>

        <div className="p-4 border border-border rounded-lg flex flex-col items-center">
          <svg className="w-16 h-16">
            <use xlinkHref="/sprite.svg#icon-vue" />
          </svg>
          <p className="mt-2 text-sm">Vue Icon</p>
          <code className="text-xs mt-1 bg-muted/50 p-1 rounded">icon-vue</code>
        </div>

        <div className="p-4 border border-border rounded-lg flex flex-col items-center">
          <svg className="w-16 h-16 text-green-500">
            <use xlinkHref="/sprite.svg#icon-nodejs" />
          </svg>
          <p className="mt-2 text-sm">Node.js Icon</p>
          <code className="text-xs mt-1 bg-muted/50 p-1 rounded">icon-nodejs</code>
        </div>
      </div>

      <div className="mt-6 p-4 border border-border rounded-lg">
        <h3 className="font-semibold mb-4">How to use the sprite</h3>
        <pre className="bg-muted/50 p-3 rounded text-xs overflow-auto">
          {`// In your React component
<svg className="w-10 h-10 text-blue-500">
  <use xlinkHref="/sprite.svg#icon-react" />
</svg>

// The "text-blue-500" class will color the icon if it uses "currentColor"`}
        </pre>
      </div>
    </div>
  )
}

