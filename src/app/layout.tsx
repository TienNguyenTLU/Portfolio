import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import { Poppins } from 'next/font/google'
import Head from "next/head";
const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: '700',
  display: 'swap',
  variable: '--font-poppins', 
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TienNguyen's Portfolio",
  description: "A showcase of my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
