"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"

export default function Contact() {
  const personalInfo = getPersonalInfo()
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: personalInfo.location,
      link: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
    },
  ]

  // Get social links from personal info
  const socialLinks = personalInfo.socialLinks || []

  // Function to get the appropriate icon component
  const getSocialIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <Github className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "stack-overflow":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
          </svg>
        )
      case "upwork":
        return (
          <svg fill="currentColor" className="h-5 w-5" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
          </svg>
        )
      default:
        return <Mail className="h-5 w-5" />
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 mt-16"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold">Let's talk about your project</h3>
            <p className="text-foreground/70">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
              other request or question, don't hesitate to use the form.
            </p>

            <div className="space-y-6 pt-4">
              {contactInfo.map((item, index) => (
                <motion.a key={index} href={item.link} whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-foreground/70">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-background/50 backdrop-blur-sm p-3 rounded-full border border-border hover:border-primary/50 transition-all shadow-sm"
                  >
                    {getSocialIcon(link.icon)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form className="space-y-6 bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  onClick={() => {
                    const name = (document.getElementById("name") as HTMLInputElement)?.value || ""
                    const email = (document.getElementById("email") as HTMLInputElement)?.value || ""
                    const subject = (document.getElementById("subject") as HTMLInputElement)?.value || ""
                    const message = (document.getElementById("message") as HTMLTextAreaElement)?.value || ""

                    const mailtoLink = `mailto:${personalInfo.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`
                      Name: ${name}
                      Email: ${email}
                      
                      ${message}`)}`
                    window.open(mailtoLink, "_blank")
                  }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-500 text-white px-8 py-3 text-base shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] border-none"
                >
                  <span className="relative z-10 flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                </Button>
                <Button
                  type="button"
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 text-base shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] border-none"
                  onClick={() => {
                    const name = (document.getElementById("name") as HTMLInputElement)?.value || ""
                    const email = (document.getElementById("email") as HTMLInputElement)?.value || ""
                    const subject = (document.getElementById("subject") as HTMLInputElement)?.value || ""
                    const message = (document.getElementById("message") as HTMLTextAreaElement)?.value || ""

                    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`)}`
                    window.open(mailtoLink, "_blank")
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Compose Gmail
                  </span>
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

