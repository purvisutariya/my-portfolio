"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"
import { getBlogsData } from "@/lib/data"

interface Post {
  title: string
  link: string
  pubDate: string
  description: string
  thumbnail: string
  categories: string[]
}

export default function Blogs() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const blogsData = getBlogsData()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(blogsData.mediumRssFeed)

        if (data && data.items && Array.isArray(data.items)) {
          const formattedPosts = data.items.map((post: any) => ({
            title: post.title,
            link: post.link,
            pubDate: new Date(post.pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            description: post.description,
            thumbnail: post.thumbnail || extractFirstImage(post.description) || "/placeholder.svg?height=400&width=600",
            categories: post.categories || [],
          }))

          setPosts(formattedPosts)
        } else {
          setError("Invalid data format received from API")
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error)
        setError("Failed to load blog posts. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [blogsData.mediumRssFeed])

  function extractFirstImage(html: string): string | null {
    try {
      const imgRegex = /<img[^>]+src="([^">]+)"/g
      const match = imgRegex.exec(html)
      return match ? match[1] : null
    } catch (error) {
      return null
    }
  }

  function truncateText(text: string, maxLength: number): string {
    // Remove HTML tags
    const strippedText = text.replace(/<[^>]*>?/gm, "")
    if (strippedText.length <= maxLength) return strippedText
    return strippedText.substring(0, maxLength) + "..."
  }

  // Fallback data for testing/development
  const fallbackPosts = [
    {
      title: "Building Scalable Web Applications with Next.js",
      link: "https://medium.com",
      pubDate: "March 15, 2023",
      description:
        "Learn how to leverage Next.js features to build applications that can handle millions of users with efficient rendering strategies and optimized data fetching.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["Web Development"],
    },
    {
      title: "The Future of Frontend Development: What to Expect in 2024",
      link: "https://medium.com",
      pubDate: "February 28, 2023",
      description:
        "Exploring upcoming trends and technologies that will shape the future of frontend development including AI-assisted coding, WebAssembly, and more.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["Frontend"],
    },
    {
      title: "Optimizing Database Performance for High-Traffic Applications",
      link: "https://medium.com",
      pubDate: "January 12, 2023",
      description:
        "Strategies and techniques to ensure your database can handle high loads without compromising performance, including indexing, caching, and query optimization.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["Database"],
    },
  ]

  // Use fallback data if there's an error or no posts
  const displayPosts = posts.length === 0 && !loading ? fallbackPosts : posts

  if (loading) {
    return (
      <section id="blog" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <SectionHeading title="Latest Articles" subtitle="My Blog" />
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <div className="text-foreground/50">Loading blog posts...</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Latest Articles" subtitle="My Blog" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {displayPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="rounded-xl overflow-hidden shadow-lg h-full"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-background/80 backdrop-blur-sm border border-border transition-all duration-300 relative after:absolute after:inset-0 after:rounded-xl after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:-z-10 after:bg-gradient-to-r after:from-primary/20 after:to-purple-500/20 after:blur-xl after:scale-105 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{
                      backgroundImage: `url(${post.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {post.categories && post.categories.length > 0 && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                      {post.categories[0]}
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold line-clamp-2">{post.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
                  <div className="flex items-center text-sm text-foreground/60 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.pubDate}</span>
                  </div>

                  <p className="text-foreground/80 line-clamp-3 mb-4 flex-grow">
                    {truncateText(post.description, 120)}
                  </p>

                  <div className="flex items-center text-primary font-medium mt-auto group">
                    Read Article
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              className="bg-gradient-to-r from-primary to-purple-500 hover:bg-gradient-to-r hover:from-primary/90 hover:to-purple-600 text-white font-semibold border-none shadow-md px-8 py-3 text-base rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              onClick={() => window.open("https://medium.com/@bhadreshm3418", "_blank")}
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

