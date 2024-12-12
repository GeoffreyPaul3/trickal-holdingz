'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'TPay',
    description: 'Easily exchange currencies and make payments with TPay. Secure and reliable services for all your financial needs.',
    image: '/assets/tpay.png',
  },
  {
    name: 'tconnect',
    description: 'Whether for personal use or gifting, our platform offers a seamless experience with multiple payment options.',
    image: '/assets/tconnect.png',
  },
  {
    name: 'tpay',
    description: 'Quickly and securely send money to friends and family worldwide with TPay.',
    image: '/assets/tpay2.jpg',
  },
]

const ProductShowcase = () => {
  const [currentProduct, setCurrentProduct] = useState(0)

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="product-showcase" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Our Products in Action
        </motion.h2>
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <motion.div
              key={currentProduct}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video"
            >
              <Image
                src={products[currentProduct].image}
                alt={products[currentProduct].name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProduct}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProduct}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              aria-label="Next product"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            {products[currentProduct].name}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {products[currentProduct].description}
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProduct(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentProduct ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

