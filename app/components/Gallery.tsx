'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { artworks } from '../data/artworks'

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div 
              key={artwork.id} 
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={artwork.src} alt={artwork.title} width={400} height={300} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{artwork.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}