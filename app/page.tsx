"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Home } from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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

  const marginValue = isDesktop ? "-64px" : "-48px";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/banner-concept.png"
          alt="Steengoed Festival Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Overlay */}
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

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-8 py-6">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${
                mounted
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="Steengoed Festival Logo"
                width={400}
                height={300}
                className="mx-auto hover:scale-110 hover:rotate-2 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
                style={{
                  filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2rem 20px)",
                  animation: "floatAndRotate 5.5s ease-in-out infinite",
                  marginTop: marginValue,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatAndRotate {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-12px) translateX(-5px) rotate(1.5deg);
          }
          50% {
            transform: translateY(-8px) translateX(8px) rotate(-1deg);
          }
          75% {
            transform: translateY(-15px) translateX(-3px) rotate(2.5deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
