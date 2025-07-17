"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Ticket, Mail, CheckCircle } from "lucide-react";

export default function TicketButton() {
  const [showModal, setShowModal] = useState(false);
  const [emailStep, setEmailStep] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  // Reset modal state when opening
  const openModal = () => {
    setShowModal(true);
    setEmailStep(true);
    setEmail("");
    setIsSubmitting(false);
    setSubmitError("");
  };

  // Close modal when clicking outside
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  // Handle email form submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xjkovpew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: "Email signup for Steengoed Festival updates",
        }),
      });

      if (response.ok) {
        setEmailStep(false);
      } else {
        setSubmitError("Er ging iets mis. Probeer het opnieuw.");
      }
    } catch (error) {
      setSubmitError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Ticket Button */}
      <div className="fixed bottom-8 right-8 md:bottom-8 md:right-12 z-50">
        <button
          onClick={openModal}
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
              {emailStep ? (
                <>
                  {/* Email Collection Step */}
                  <div className="mb-6">
                    <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      Eerst even dit
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                      Voer je emailadres in om updates over het festival te
                      ontvangen
                    </p>
                  </div>

                  {/* Email Form */}
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="je@email.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    {submitError && (
                      <p className="text-red-500 text-sm">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      {isSubmitting ? "Bezig..." : "Doorgaan naar ticket"}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 mt-4">
                    We gebruiken je email alleen voor festival updates
                  </p>
                </>
              ) : (
                <>
                  {/* Success message */}
                  <div className="mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-green-600 font-medium">
                      Bedankt! Je bent toegevoegd aan onze lijst.
                    </p>
                  </div>

                  {/* QR Code Step */}
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
                    <p>Scan met je telefoon camera of QR code scanner, of gebruik onderstaande knop als je al op je mobiel bent:</p>
                  </div>

                  {/* Tikkie button for mobile */}
                  <a
                    href="https://tikkie.me/pay/55g7ib1i28sjg2if5t8b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 inline-block text-center"
                  >
                    Open Tikkie
                  </a>
                </>
              )}

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
