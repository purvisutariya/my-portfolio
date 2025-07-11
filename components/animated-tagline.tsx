"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const AnimatedTagline = () => {
  const phrases = ["Full Stack Developer", "Tech Lead", "Project Manager", "Problem Solver", "Code Artisan"]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing speed in milliseconds
  const typingSpeed = 100
  // Deleting speed (faster than typing)
  const deletingSpeed = 50
  // Delay after phrase is complete
  const delayAfterPhrase = 1500
  // Delay before deleting
  const delayBeforeDeleting = 700

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // If we're not deleting, we're typing
    if (!isDeleting) {
      // If the current text is shorter than the full phrase, add a character
      if (currentText.length < phrases[currentPhraseIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(phrases[currentPhraseIndex].substring(0, currentText.length + 1))
        }, typingSpeed)
      }
      // If we've completed typing the phrase
      else {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delayBeforeDeleting)
      }
    }
    // If we are deleting
    else {
      // If there's still text to delete
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        }, deletingSpeed)
      }
      // If we've deleted all text
      else {
        setIsDeleting(false)
        // Move to the next phrase
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        // Add a pause before starting the next phrase
        timeout = setTimeout(() => {}, delayAfterPhrase)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex, phrases])

  return (
    <div className="h-10 sm:h-12 md:h-16 flex items-center justify-center mb-4">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/80 inline-flex items-center flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>I'm a </span>
        <span className="text-primary font-bold ml-2 relative">
          {currentText}
          <motion.span
            className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary"
            animate={{
              opacity: [1, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </span>
      </motion.h2>
    </div>
  )
}

export default AnimatedTagline

