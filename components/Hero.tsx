'use client'

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ParticleBackground from "./ParticleBackground"
import Link from "next/link"

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -200])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    // Scrolls down by the full window height (e.g., to the next section)
    window.scrollTo({
      top: window.innerHeight, // This moves to the next section based on the viewport height
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <ParticleBackground />
      
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4"
        >
          Driving Financial Innovation
          <br />
          <span className="text-blue-300">and Strategic Success</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl"
        >
          Empowering Businesses with cutting-edge Financial Solutions and Strategies for Sustainable Growth.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12"
        >
          <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10">
            <Link href="#products">
             Get Started
            </Link>
          </Button>
          <Button size="lg" variant="secondary" className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-8 py-3 text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10">
           <Link href="#services">
             Learn More
           </Link> 
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
      onClick={handleScroll}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      aria-hidden="true"
    >
      <ChevronDown className="h-8 w-8 text-white" />
    </motion.div><motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        aria-hidden="true"
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </div>
  )
}

export default Hero

