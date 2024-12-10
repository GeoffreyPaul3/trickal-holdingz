'use client'

import { useState } from "react"
import { products, productsBtnText, productsTitle } from "@/data"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowBigRight, ExternalLink } from 'lucide-react'
import Link from "next/link"

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(4)
  const [filter, setFilter] = useState('all')

  const handleShowMore = () => {
    setVisibleProducts(products.length)
  }

  const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter)

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          {productsTitle}
        </motion.h2>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
            className="rounded-full"
          >
            All
          </Button>
          <Button
            onClick={() => setFilter('payment')}
            variant={filter === 'payment' ? 'default' : 'outline'}
            className="rounded-full"
          >
            Payment
          </Button>
          <Button
            onClick={() => setFilter('finance')}
            variant={filter === 'finance' ? 'default' : 'outline'}
            className="rounded-full"
          >
            Finance
          </Button>
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.slice(0, visibleProducts).map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{product.title}</h3>
                    <div className="bg-blue-100 rounded-full p-2 group-hover:bg-blue-200 transition-colors duration-300">
                      <product.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="aspect-w-16 aspect-h-9 mb-6 relative overflow-hidden rounded-lg">
                    <Image
                      src={product.img}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                  <Link href={product.link} className="mt-auto">
                    <Button className="w-full flex justify-between items-center group-hover:bg-blue-600 transition-colors duration-300">
                      <span>Learn More</span>
                      <ExternalLink size={20} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {visibleProducts < filteredProducts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              className="mx-auto flex items-center gap-2 rounded-full px-8 py-6 text-lg"
              onClick={handleShowMore}
            >
              <span>{productsBtnText}</span>
              <ArrowBigRight className="ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Products

