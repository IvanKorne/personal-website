import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import React from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ivan Korneychuk | Portfolio",
  description: "Created by Ivan Korneychuk",
};

const INTER = Inter({ subsets: ["latin"], variable: "--font-sans" });
const CALISTOGA = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          INTER.variable,
          CALISTOGA.variable,
          "bg-gray-900 text-white antialiased font-sans text-sm"
        )}
      >
        {children}
      </body>
    </html>
  );
}
