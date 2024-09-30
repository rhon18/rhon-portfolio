import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </main>
  )
}