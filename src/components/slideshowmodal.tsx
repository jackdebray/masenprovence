"use client";
import { useState, useEffect, MouseEvent, KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

interface Image {
  src: string;
  alt: string;
}

interface SlideshowModalProps {
  images: Image[];
  initialIndex: number;
  onClose: () => void;
}

export default function SlideshowModal({
  images,
  initialIndex,
  onClose,
}: SlideshowModalProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListener
    );
    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    };
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleModalClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleArrowClick = (e: MouseEvent, direction: "next" | "prev") => {
    e.stopPropagation();
    direction === "next" ? nextImage() : prevImage();
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleModalClick}
    >
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <X />
      </button>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-4 z-50"
        onClick={(e) => handleArrowClick(e, "prev")}
      >
        <ArrowLeft className="h-10 w-10" />
      </button>
      <div
        className="relative flex items-center justify-center w-full max-w-3xl"
        onClick={handleContentClick} // Prevents closing modal when clicking on image or arrows
        {...handlers}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-h-screen mx-auto"
        />
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-4 z-50"
        onClick={(e) => handleArrowClick(e, "next")}
      >
        <ArrowRight className="h-10 w-10" />
      </button>
    </div>
  );
}
