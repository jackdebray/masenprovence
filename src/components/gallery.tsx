"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import SlideshowModal from "@/components/slideshowmodal";
import gsap from "gsap";

export default function GalleryComponent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const images = [
    {
      src: "/bg-1.jpg",
      alt: "The Mas From Outside ",
      category: "exterior",
    },
    {
      src: "/aperitif-about.jpg",
      alt: "Aperitif Area",
      category: "exterior",
    },
    {
      src: "/terrace-space.jpg",
      alt: "Terrace Space",
      category: "exterior",
    },
    {
      src: "/outdoor-dining.jpg",
      alt: "Outdoor Dining Area",
      category: "exterior",
    },
    {
      src: "/poolside-1.jpg",
      alt: "Pool Area",
      category: "exterior",
    },
    {
      src: "/poolside-2.jpg",
      alt: "Pool Area",
      category: "exterior",
    },
    {
      src: "/pool-dining.jpg",
      alt: "Pool Outdoor Table",
      category: "exterior",
    },
    {
      src: "/garden-1.jpg",
      alt: "Garden View",
      category: "exterior",
    },
    {
      src: "/patio-dining.jpg",
      alt: "Patio Table",
      category: "exterior",
    },
    {
      src: "/master-bedroom.jpg",
      alt: "Master Bedroom",
      category: "interior",
    },
    {
      src: "/double-1.jpg",
      alt: "Bedroom",
      category: "interior",
    },
    {
      src: "/double-2.jpg",
      alt: "Bedroom",
      category: "interior",
    },
    {
      src: "/double-3.jpg",
      alt: "Bedroom",
      category: "interior",
    },
    {
      src: "/kids-1.jpg",
      alt: "Kids Bedroom",
      category: "interior",
    },
    {
      src: "/bathroom-1.jpg",
      alt: "Bathroom",
      category: "interior",
    },
    {
      src: "/single-2.jpg",
      alt: "Bedroom",
      category: "interior",
    },
    {
      src: "/single-3.jpg",
      alt: "Single Bedroom",
      category: "interior",
    },
    {
      src: "/ensuite-1.jpg",
      alt: "Master Ensuite",
      category: "interior",
    },
    {
      src: "/living-1.jpg",
      alt: "Living Room",
      category: "interior",
    },
    {
      src: "/living-2.jpg",
      alt: "TV Room",
      category: "interior",
    },
    {
      src: "/study-1.jpg",
      alt: "Study",
      category: "interior",
    },
    {
      src: "/kitchen-1.jpg",
      alt: "Kitchen",
      category: "interior",
    },
    {
      src: "/dining-1.jpg",
      alt: "Dining Table",
      category: "interior",
    },
    {
      src: "/kitchen-2.jpg",
      alt: "Kitchen",
      category: "interior",
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((image) => image.category === activeFilter);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".gallery-image", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        tl.to(".gallery-image", {
          opacity: 1,
          stagger: 0.05,
          duration: 0.25,
        });
      },
    });
  }, [activeFilter]);

  const openModal = (index: any) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <header className="bg-background p-4 md:p-6">
        <div className="container mx-auto flex justify-center gap-4">
          <Button
            {...(activeFilter !== "all" && { variant: "outline" })}
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
          <Button
            {...(activeFilter !== "exterior" && { variant: "outline" })}
            onClick={() => setActiveFilter("exterior")}
          >
            Exterior
          </Button>
          <Button
            {...(activeFilter !== "interior" && { variant: "outline" })}
            onClick={() => setActiveFilter("interior")}
          >
            Interior
          </Button>
        </div>
      </header>
      <div className="container mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group gallery-image"
            onClick={() => openModal(index)}
          >
            <span className="absolute inset-0 z-10 cursor-pointer"></span>
            <img
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="h-60 w-full object-cover transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-primary-foreground">
                {image.alt}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <SlideshowModal
          images={filteredImages}
          initialIndex={modalIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
