'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Rhon Kenneth Trazo
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Multi-media Artist | Creator | Innovator
        </motion.p>
        <motion.a 
          href="#gallery" 
          className="bg-white text-gray-800 py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  )
}