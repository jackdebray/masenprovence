import type { Metadata } from "next";
import { inter } from "@/fonts";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mas en Provence",
  description: "A luxury villa in the heart of Provence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
