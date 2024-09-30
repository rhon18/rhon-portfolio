'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      className="bg-white shadow-md fixed w-full z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          {['Home', 'Gallery', 'About', 'Contact'].map((item, index) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={`#${item.toLowerCase()}`} className="text-gray-800 hover:text-blue-600 transition duration-300">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}