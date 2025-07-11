import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })
const personalInfo = getPersonalInfo();

export const metadata: Metadata = {
  title: "Developer Portfolio | Tech Lead & Project Manager",
  description: `Portfolio website for a web developer, tech lead and project manager with ${personalInfo.experienceYears} years of experience`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  )
}



import './globals.css'
import { getPersonalInfo } from "@/lib/data"
