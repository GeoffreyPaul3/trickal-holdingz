'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = ['home', 'services', 'products', 'product-showcase', 'partners']

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900/80 backdrop-blur-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/assets/Trickal.png" width={50} height={50} alt="Trickal Holdings Logo" className="w-auto h-12" />
          </motion.div>

          <nav className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-blue-300 transition-colors cursor-pointer"
              >
                {item === 'product-showcase' ? 'Showcase' : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button size="lg" className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8" onClick={() => window.location.href = 'mailto:contact@trickalholdings.com'}>
              Contact Us
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white hover:text-blue-300 transition-colors cursor-pointer block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item === 'product-showcase' ? 'Showcase' : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white" onClick={() => window.location.href = 'mailto:contact@trickalholdings.com'}>
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

