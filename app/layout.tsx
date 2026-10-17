import type { Metadata } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Atlantis Group | Real Estate Since 1989",
  description:
    "Atlantis Group has helped families and investors buy, sell, and grow property portfolios since 1989.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${manrope.variable} ${jetbrainsMono.variable} ${oswald.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
