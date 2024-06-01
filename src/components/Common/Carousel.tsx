import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(true);

      const timeout = setTimeout(() => {
        setIsFading(false);
      }, 1000); // Duration of the fade effect (1 second)

      return () => clearTimeout(timeout);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full h-[30rem] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex && isFading ? 'opacity-100' : index === prevIndex && isFading ? 'opacity-0' : index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              width={1000}
              height={1000}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
