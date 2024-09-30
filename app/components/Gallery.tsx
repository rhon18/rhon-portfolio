import Image from 'next/image'

export default function Gallery() {
  const artworks = [
    { id: 1, title: 'Digital Painting', src: '/placeholder.svg?height=300&width=400' },
    { id: 2, title: '3D Sculpture', src: '/placeholder.svg?height=300&width=400' },
    { id: 3, title: 'Video Installation', src: '/placeholder.svg?height=300&width=400' },
    { id: 4, title: 'Interactive Art', src: '/placeholder.svg?height=300&width=400' },
    { id: 5, title: 'Mixed Media', src: '/placeholder.svg?height=300&width=400' },
    { id: 6, title: 'Generative Art', src: '/placeholder.svg?height=300&width=400' },
  ]

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image src={artwork.src} alt={artwork.title} width={400} height={300} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{artwork.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}