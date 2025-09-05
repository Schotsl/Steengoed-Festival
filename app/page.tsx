"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollLeft = () => {
    if (scrollContainer) {
      const imageWidth = 600 + 32; // image width + gap
      scrollContainer.scrollBy({ left: -imageWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer) {
      const imageWidth = 600 + 32; // image width + gap
      scrollContainer.scrollBy({ left: imageWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/banner-concept.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content - Carousel Display */}
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="w-full">
            <div
              className={`transition-all duration-1000 ${
                mounted
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              {/* Custom Flexbox Carousel */}
              <div className="relative w-full">
                {/* Left Arrow - Desktop Only */}
                <button
                  onClick={scrollLeft}
                  className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-amber-100 hover:bg-white/20 hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow - Desktop Only */}
                <button
                  onClick={scrollRight}
                  className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-amber-100 hover:bg-white/20 hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Scrollable container */}
                <div
                  ref={setScrollContainer}
                  className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4"
                  style={{
                    scrollBehavior: "smooth",
                    scrollSnapType: "x mandatory",
                    paddingLeft: "50vw",
                    paddingRight: "50vw",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6].map((imageNumber) => (
                    <div
                      key={imageNumber}
                      className="flex-shrink-0 flex justify-center"
                      style={{
                        scrollSnapAlign: "center",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Image
                        src={`/images/carousel/${imageNumber}.jpeg`}
                        alt={`Steengoed Festival Programma ${imageNumber}`}
                        width={600}
                        height={900}
                        className="h-auto"
                        sizes="(max-width: 768px) 80vw, 600px"
                        style={{
                          maxHeight: "75vh",
                          width: "auto",
                          borderRadius: "16px",
                        }}
                        priority={imageNumber === 1}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
