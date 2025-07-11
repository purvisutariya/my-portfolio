"use client"

export default function SvgComponentExample() {
  return (
    <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6">SVG as React Components</h2>

      <div className="space-y-4">
        <p className="text-foreground/80">
          Using SVGs as React components gives you the most control and flexibility. You can use the SVGR library to
          automatically convert SVGs to React components.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold mb-4">Setting up SVGR with Next.js</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                Install SVGR: <code>npm install --save-dev @svgr/webpack</code>
              </li>
              <li>Configure Next.js to use SVGR in your next.config.js</li>
              <li>Import SVGs directly as React components</li>
            </ol>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold mb-4">next.config.js example</h3>
            <pre className="bg-muted/50 p-3 rounded text-xs overflow-auto">
              {`/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Configure SVGR
    config.module.rules.push({
      test: /\\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = nextConfig;`}
            </pre>
          </div>
        </div>

        <div className="p-4 border border-border rounded-lg">
          <h3 className="font-semibold mb-4">Usage in your components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted/50 p-3 rounded text-xs">
              {`// After setting up SVGR
import ReactLogo from '@/icons/react.svg';

export default function MyComponent() {
  return (
    <div>
      <ReactLogo className="w-10 h-10 text-blue-500" />
    </div>
  );
}`}
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">SVG</span>
                </div>
                <p className="text-xs mt-2">Example component (needs SVGR setup)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

