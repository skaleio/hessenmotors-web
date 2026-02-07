import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  vehicleName: string;
  year?: number;
}

const ImageCarousel = ({ images, vehicleName, year }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/20 flex items-center justify-center">
        <p className="text-muted-foreground">No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <div className="relative rounded-lg overflow-hidden bg-secondary/20 group min-h-[400px] max-h-[600px] flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`${vehicleName} - Imagen ${currentIndex + 1}`}
          className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          {year && (
            <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium">
              {year}
            </div>
          )}
          <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold">
          CONSIGNACIÓN
        </div>

        {/* Botones de navegación */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Miniaturas - Grid sin scroll horizontal */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={cn(
                "aspect-square rounded-lg overflow-hidden border-2 transition-all",
                currentIndex === index
                  ? "border-primary scale-105 ring-2 ring-primary/50"
                  : "border-border/50 hover:border-primary/50 opacity-70 hover:opacity-100"
              )}
            >
              <img
                src={image}
                alt={`${vehicleName} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
