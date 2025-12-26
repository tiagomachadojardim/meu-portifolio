'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number;
}

export default function ImageCarousel({ 
  images, 
  alt, 
  autoPlayInterval = 3500 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Se só tiver uma imagem, não precisa de carousel
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
    );
  }

  useEffect(() => {
    if (!isHovered && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [isHovered, images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`${alt} - ${index + 1}`}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Aparecem no hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              goToPrevious();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Imagem anterior"
          >
            <FiChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              goToNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Próxima imagem"
          >
            <FiChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                goToSlide(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}
