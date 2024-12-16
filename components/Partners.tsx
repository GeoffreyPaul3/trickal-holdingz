'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'


const partners = [
  { name: 'SEAGM', logo: '/assets/seagm.png' },
  { name: 'Reloadly', logo: '/assets/Reloadly.png' },
  { name: 'Crypto Pay', logo: '/assets/CryptoPay.png' },
  { name: 'NearPay', logo: '/assets/NearPay.jpg' },
  { name: 'Veem', logo: '/assets/Veem.png' },
  { name: 'Karma', logo: '/assets/Karma.jpg' },
]


const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Our Partners
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                className="max-w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners;
