import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TicketButton from "@/components/ticket-button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steengoed Festival",
  description: "Welkom bij Steengoed Festival - Een unieke festival ervaring",
  generator: "Next.js",
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
        <TicketButton />
      </body>
    </html>
  );
}
