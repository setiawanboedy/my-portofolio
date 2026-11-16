import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://setiawanboedy.github.io"),
  title: "Budi Setiawan | Software Engineer",
  description:
    "Portfolio of Budi Setiawan - Software Engineer with 3+ years of experience specializing in Mobile (Kotlin, Flutter) and Backend Development (Golang, Laravel).",
  keywords: [
    "Budi Setiawan",
    "Software Developer",
    "Mobile Developer",
    "Android Developer",
    "Backend Developer",
    "Kotlin",
    "Flutter",
    "Golang",
    "Laravel",
    "Jetpack Compose",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Budi Setiawan", url: "https://github.com/setiawanboedy" }],
  creator: "Budi Setiawan",
  openGraph: {
    title: "Budi Setiawan | Software Developer (Mobile & Backend)",
    description:
      "Crafting high-performance mobile applications and scalable backend systems with Kotlin, Flutter, Golang, and Laravel.",
    siteName: "Budi Setiawan Portfolio",
    images: [
      {
        url: "/assets/budisetiawan.png",
        width: 800,
        height: 800,
        alt: "Budi Setiawan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budi Setiawan | Software Developer",
    description:
      "Mobile & Backend Developer specializing in Kotlin, Flutter, and Golang.",
    images: ["/assets/budisetiawan.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
