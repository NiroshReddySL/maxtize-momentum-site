
import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImage = ({ 
  src, 
  alt, 
  placeholder = '/placeholder.svg', 
  className = '', 
  width, 
  height 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Use Intersection Observer to detect when the image is in the viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px 0px', // Load images 200px before they enter the viewport
      threshold: 0.01
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Generate sizes for srcset if width is provided
  const srcset = width ? `${src} 1x, ${src} 2x` : undefined;

  // Handle image load completion
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
      ref={imgRef}
    >
      {/* Placeholder or blurred version */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 bg-gray-200 dark:bg-gray-800"
          width={width}
          height={height}
          aria-hidden="true"
        />
      )}
      
      {/* Actual image (loads when in viewport) */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleImageLoaded}
          loading="lazy"
          width={width}
          height={height}
          srcSet={srcset}
        />
      )}
    </div>
  );
};

export default LazyImage;
