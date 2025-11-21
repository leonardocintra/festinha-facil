import React from 'react';
import Image from 'next/image';

export const Gallery = () => {
  const images = [
    { src: '/images/gallery1.png', alt: 'Decoração de Super-Heróis', span: 'md:col-span-2 md:row-span-2' },
    { src: '/images/gallery2.png', alt: 'Piscina de Bolinhas', span: 'md:col-span-1 md:row-span-1' },
    { src: '/images/gallery3.png', alt: 'Buffet Infantil', span: 'md:col-span-1 md:row-span-1' },
    // Add duplicates or more images if needed for a fuller grid, for now reusing
    { src: '/images/hero.png', alt: 'Festa Animada', span: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Momentos <span className="text-pink-500">Inesquecíveis</span>
          </h2>
          <p className="text-lg text-gray-600">
            Veja como transformamos sonhos em realidade. Cada festa é única e especial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          {images.map((img, index) => (
            <div key={index} className={`relative rounded-3xl overflow-hidden group ${img.span}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
