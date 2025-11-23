import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Button } from "./button";

interface ImageSlideshowProps extends React.HTMLAttributes<HTMLDivElement> {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export function ImageSlideshow({
  images,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className,
  ...props
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, goToNext]);

  if (!images || images.length === 0) {
    return <div className={cn("bg-muted/50 rounded-lg p-8 text-center", className)}>No images to display</div>;
  }

  return (
    <div 
      className={cn("relative w-full overflow-hidden rounded-lg", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...props}
    >
      {/* Slides */}
      <div 
        className="relative aspect-video w-full"
        style={{
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateX(${index * 100}%)`,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md transition-all"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md transition-all"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Example usage with file input
interface ImageUploadSlideshowProps extends Omit<ImageSlideshowProps, 'images'> {
  onImagesChange?: (images: File[]) => void;
  maxFiles?: number;
  accept?: string;
}

export function ImageUploadSlideshow({
  onImagesChange,
  maxFiles = 10,
  accept = "image/*",
  ...props
}: ImageUploadSlideshowProps) {
  const [images, setImages] = useState<Array<{ src: string; alt: string }>>([]);
  const [inputKey, setInputKey] = useState(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).slice(0, maxFiles - images.length).map(file => ({
        src: URL.createObjectURL(file),
        alt: file.name,
        file
      }));

      setImages(prev => {
        const updated = [...prev, ...newImages];
        if (onImagesChange) {
          onImagesChange(updated.map(img => (img as any).file).filter(Boolean));
        }
        return updated;
      });

      // Reset input to allow selecting the same file again
      setInputKey(prev => prev + 1);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          key={inputKey}
          type="file"
          accept={accept}
          multiple
          onChange={handleImageChange}
          disabled={images.length >= maxFiles}
          className="w-full"
        />
        {images.length > 0 && (
          <Button
            variant="outline"
            onClick={() => {
              setImages([]);
              if (onImagesChange) onImagesChange([]);
            }}
            type="button"
          >
            Clear All
          </Button>
        )}
      </div>
      
      {images.length > 0 ? (
        <ImageSlideshow images={images} {...props} />
      ) : (
        <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground">
          <p>Upload images to see the slideshow</p>
        </div>
      )}
    </div>
  );
}
