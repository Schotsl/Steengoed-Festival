import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface SharedLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function SharedLayout({
  children,
  className = "",
}: SharedLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/banner-concept.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 min-h-screen">
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

        {/* Content */}
        <main className={`px-8 md:px-12 pb-8 ${className}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-lg">
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
      className={`text-4xl md:text-5xl font-bold text-amber-100 mb-8 text-center ${className}`}
    >
      {title}
    </h1>
  );
}
