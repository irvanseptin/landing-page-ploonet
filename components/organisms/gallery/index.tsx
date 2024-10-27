import React, { useState } from 'react'
import Title from '@/components/molecules/title'

import { GalleryProps } from './gallery.interface'

const Gallery: React.FC<GalleryProps> = ({
  title,
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (image: string) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="bg-black py-4 pt-10 md:pt-20 text-center">
      <Title title={title} isWithDot className="font-semibold mb-6 max-md:text-xl"/>
      <div className="grid grid-cols-4 gap-0 md:grid-cols-4 grid-cols-2">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer" onClick={() => openModal(image)}>
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  )
}

export default Gallery
