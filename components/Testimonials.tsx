'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const testimonials = [
  {
    content: "Trickal Holdings has transformed our financial strategy. Their innovative solutions have led to significant growth in our portfolio.",
    author: "Jane Doe",
    role: "CFO, Tech Innovators Inc.",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    content: "The level of insight and expertise provided by Trickal Holdings is unmatched. They've become an invaluable partner in our financial journey.",
    author: "John Smith",
    role: "CEO, Global Ventures Ltd.",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    content: "Working with Trickal Holdings has been a game-changer for our startup. Their guidance has been crucial in our rapid expansion.",
    author: "Emily Johnson",
    role: "Founder, NextGen Startups",
    avatar: "/placeholder.svg?height=80&width=80"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-blue-500 mb-6" />
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">{testimonials[currentIndex].content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0">
            <div className="flex justify-between">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlay(false)
              }}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

