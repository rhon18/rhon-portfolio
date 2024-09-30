import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#home" className="text-gray-800 hover:text-blue-600">Home</Link></li>
          <li><Link href="#gallery" className="text-gray-800 hover:text-blue-600">Gallery</Link></li>
          <li><Link href="#about" className="text-gray-800 hover:text-blue-600">About</Link></li>
          <li><Link href="#contact" className="text-gray-800 hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}