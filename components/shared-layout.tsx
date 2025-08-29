"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";

interface SharedLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function SharedLayout({
  children,
  className = "",
}: SharedLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
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

  const marginValue = isDesktop ? "-64px" : "-60px";

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

        {/* Content */}
        <main
          className={`flex-1 flex items-center justify-center px-8 md:px-12 py-6 pt-20 pb-40 md:pb-20 ${className}`}
        >
          <div className="w-full max-w-4xl mx-auto">
            <div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-lg"
              style={{ marginTop: marginValue }}
            >
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  className?: string;
}

export function PageHeader({ title, className = "" }: PageHeaderProps) {
  return (
    <h1
      className={`text-4xl md:text-5xl font-bold text-amber-100 mb-12 text-center ${className}`}
    >
      {title}
    </h1>
  );
}

// Secondary button component
interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({
  children,
  href,
  onClick,
  className = "",
}: SecondaryButtonProps) {
  const baseClasses =
    "inline-block bg-white/10 backdrop-blur-sm border-2 border-orange-400 text-orange-200 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:px-10 font-semibold";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
