import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TicketButton from "@/components/ticket-button";
import EmailButton from "@/components/email-button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steengoed Festival",
  description: "Het beste festival van Nederland",
  generator: "Next.js",
  robots: "noindex, nofollow",
  icons: {
    icon: [
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Steengoed Festival",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={montserrat.variable}>
      <body className={montserrat.className}>
        {children}
        <EmailButton />
        <TicketButton />
      </body>
    </html>
  );
}
