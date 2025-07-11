"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "@/components/section-heading"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Learn how to leverage Next.js features to build applications that can handle millions of users.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Mar 15, 2023",
      readTime: "8 min read",
      category: "Web Development",
      slug: "building-scalable-web-applications",
    },
    {
      id: 2,
      title: "The Future of Frontend Development: What to Expect in 2024",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of frontend development.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Feb 28, 2023",
      readTime: "6 min read",
      category: "Frontend",
      slug: "future-of-frontend-development",
    },
    {
      id: 3,
      title: "Optimizing Database Performance for High-Traffic Applications",
      excerpt:
        "Strategies and techniques to ensure your database can handle high loads without compromising performance.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Jan 12, 2023",
      readTime: "10 min read",
      category: "Database",
      slug: "optimizing-database-performance",
    },
  ]

  return (
    <section id="blog" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Latest Articles" subtitle="My Blog" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <Badge className="absolute top-4 left-4">{post.category}</Badge>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-foreground/60 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-foreground/70 mb-4 flex-grow">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="group inline-flex items-center text-primary font-medium">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

