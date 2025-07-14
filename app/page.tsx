"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/banner-concept.png"
          alt="Steengoed Festival Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="px-8 md:px-12 py-6 md:py-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="drop-shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Steengoed Festival"
                width={100}
                height={75}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
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
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-8">
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
                className="mx-auto hover:scale-105 transition-transform duration-300"
                style={{
                  filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.4))",
                  animation: "floatAndRotate 5.5s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-8 py-6">
          <div className="flex justify-center space-x-6">
            <Link
              href="/announcements"
              className="bg-amber-900/30 backdrop-blur-sm px-6 py-3 rounded-full text-amber-100 hover:bg-black/40 transition-colors font-medium border border-white/20"
            >
              Info
            </Link>
            <Link
              href="/faq"
              className="bg-amber-900/30 backdrop-blur-sm px-6 py-3 rounded-full text-amber-100 hover:bg-black/40 transition-colors font-medium border border-white/20"
            >
              FAQ
            </Link>
            <Link
              href="/practical"
              className="bg-amber-900/30 backdrop-blur-sm px-6 py-3 rounded-full text-amber-100 hover:bg-black/40 transition-colors font-medium border border-white/20"
            >
              Praktisch
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 py-6 text-center">
          <p className="text-amber-100/80 drop-shadow-lg">
            Contact:{" "}
            <a
              href="mailto:steengoedfestival@gmail.com"
              className="hover:text-orange-300 transition-colors"
            >
              steengoedfestival@gmail.com
            </a>
          </p>
        </footer>
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
