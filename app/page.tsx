import Hero from "@/components/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Header from "@/components/header"
import Blogs from "@/components/blogs"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  )
}

