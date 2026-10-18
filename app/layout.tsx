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
        {/* Phones show the desktop layout scaled down: lay the page out 1280px wide and let the
            browser zoom it to fit. Next.js always emits initial-scale=1 (which would open zoomed
            in), so every viewport tag is rewritten here and kept that way if Next re-adds one. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var C="width=1280";function f(){var m=document.querySelectorAll('meta[name="viewport"]');for(var i=0;i<m.length;i++)if(m[i].getAttribute("content")!==C)m[i].setAttribute("content",C)}f();new MutationObserver(f).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:["content"]})})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
