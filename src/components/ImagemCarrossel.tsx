
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type ImagemCarrosselProps = {
  images: { url: string; alt: string }[];
};

const ImagemCarrossel = ({ images }: ImagemCarrosselProps) => (
  <Carousel className="relative w-full h-32 bg-gray-50 rounded-b-none" opts={{ loop: true }}>
    <CarouselContent className="h-32">
      {images.map((img, idx) => (
        <CarouselItem key={idx} className="h-32">
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-32 object-cover transition-all"
            style={{ filter: "brightness(0.94)" }}
            loading="lazy"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-1 top-1/2 -translate-y-1/2 z-10" />
    <CarouselNext className="right-1 top-1/2 -translate-y-1/2 z-10" />
  </Carousel>
);

export default ImagemCarrossel;
