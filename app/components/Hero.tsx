export default function Hero() {
    return (
      <section id="home" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Rhon</h1>
          <p className="text-xl mb-8">Multi-media Artist | Creator | Innovator</p>
          <a href="#gallery" className="bg-white text-gray-800 py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            View My Work
          </a>
        </div>
      </section>
    )
  }