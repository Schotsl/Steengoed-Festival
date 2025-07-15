"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Ticket } from "lucide-react";

export default function TicketButton() {
  const [showModal, setShowModal] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // Close modal when clicking outside
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      {/* Floating Ticket Button */}
      <div className="fixed bottom-8 right-8 md:bottom-8 md:right-12 z-50">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-full shadow-xl transition-all duration-300 ease-in-out flex items-center space-x-3 hover:px-8"
        >
          <Ticket className="w-5 h-5 flex-shrink-0" />
          <span className="font-semibold text-sm whitespace-nowrap">
            Koop je ticket nu
          </span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={handleModalClick}
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 relative shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Modal content */}
            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Koop je ticket
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Scan de QR code om je ticket te bestellen
                </p>
              </div>

              {/* QR Code */}
              <div className="bg-white p-3 md:p-4 rounded-xl border-2 border-gray-100 mb-6 inline-block">
                <Image
                  src="/images/qr.png"
                  alt="Ticket QR Code"
                  width={180}
                  height={180}
                  className="mx-auto md:w-[200px] md:h-[200px]"
                />
              </div>

              <div className="text-xs md:text-sm text-gray-500">
                <p>Scan met je telefoon camera of QR code scanner</p>
              </div>

              {/* Close button for mobile */}
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 md:hidden w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
