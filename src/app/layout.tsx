import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";

// Fontes
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../fonts/ClashDisplay-Bold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de Eduardo Mafezoli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${clashDisplay.variable} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
