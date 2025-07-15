"use client";

import { Mail } from "lucide-react";

export default function EmailButton() {
  const handleEmailClick = () => {
    window.location.href = "mailto:steengoedfestival@gmail.com";
  };

  return (
    <div className="fixed bottom-8 left-8 md:bottom-8 md:left-12 z-50">
      <button
        onClick={handleEmailClick}
        className="bg-white/10 backdrop-blur-sm border-2 border-orange-400 text-orange-200 hover:bg-orange-500 hover:text-white p-4 rounded-full transition-all duration-300 ease-in-out"
      >
        <Mail className="w-6 h-6" />
      </button>
    </div>
  );
}
