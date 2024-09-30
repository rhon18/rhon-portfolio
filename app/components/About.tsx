'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p 
            className="text-gray-700 mb-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am a passionate multi-media artist currently pursuing my degree in Fine Arts. 
            My work explores the intersection of traditional and digital mediums, 
            pushing the boundaries of artistic expression in the digital age.
          </motion.p>
          <motion.p 
            className="text-gray-700 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Through my art, I aim to provoke thought, evoke emotions, and create 
            immersive experiences that challenge the viewer's perception of reality and imagination.
          </motion.p>
        </div>
      </div>
    </section>
  )
}