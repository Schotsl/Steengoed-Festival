"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PosterPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    setMounted(true);

    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
        {/* Navigation */}
        <nav className="px-8 md:px-12 py-8 md:py-6 flex-shrink-0">
          <div className="flex justify-between items-center">
            {/* Desktop Logo */}
            <Link href="/" className="hidden md:block drop-shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Steengoed Festival"
                width={80}
                height={60}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-amber-100 hover:text-orange-300 transition-colors p-2"
            >
              <Menu className="w-10 h-10" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/announcements"
                className="text-amber-100 hover:text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                Announcements
              </Link>
              <Link
                href="/poster"
                className="text-amber-100 hover:text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                Programma
              </Link>
              <Link
                href="/faq"
                className="text-amber-100 hover:text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                FAQ
              </Link>
              <Link
                href="/practical"
                className="text-amber-100 hover:text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                Praktische Info
              </Link>
              <Link
                href="/ledenlijst"
                className="text-amber-100 hover:text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                Ledenlijst
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-white">
              <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex justify-start items-center px-8 py-8">
                  <button
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-800 transition-colors p-2"
                  >
                    <X className="w-10 h-10" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-8 py-6">
                  <div className="space-y-4 pl-4">
                    <Link
                      href="/announcements"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-orange-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                    >
                      Announcements
                    </Link>
                    <Link
                      href="/poster"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-orange-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                    >
                      Programma
                    </Link>
                    <Link
                      href="/faq"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-orange-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/practical"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-orange-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                    >
                      Praktische Info
                    </Link>
                    <Link
                      href="/ledenlijst"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-orange-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                    >
                      Ledenlijst
                    </Link>

                    {/* Logo with extra padding above */}
                    <div className="pt-12 pb-4 flex justify-start">
                      <Link href="/" onClick={closeMobileMenu}>
                        <Image
                          src="/images/logo.png"
                          alt="Steengoed Festival"
                          width={80}
                          height={60}
                          className="hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
