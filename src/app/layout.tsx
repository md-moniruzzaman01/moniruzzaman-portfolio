import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@widgets/navbar";
import Footer from "@widgets/footer";
import Script from "next/script";
import AnimationsRunner from "@widgets/animation/AnimationRunner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // SEO-friendly, benefit-driven title
  title: "Moniruzzaman | Full-Stack Developer Building Fast, Modern Web Apps",

  // Punchy, local SEO optimized description
  description:
    "Full-stack web developer specializing in Next.js, React, Tailwind, Prisma, and scalable backend systems. I build high-performance websites and modern web applications that help businesses grow, improve user experience, and elevate their digital presence.",

  // Keywords targeting NYC small business owners
  keywords: [
    "Moniruzzaman",
    "web developer",
    "New York web developer",
    "small business website NYC",
    "website design New York",
    "React developer NY",
    "Next.js web development NYC",
    "freelance web developer New York",
    "local web developer NYC",
    "online presence for small business NY",
    "affordable website solutions NY",
  ],

  // Authors and publisher info
  authors: [
    { name: "Moniruzzaman", url: "https://dev-moniruzzaman.vercel.app/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/moniruzzaman-ripon" },
  ],
  creator: "Moniruzzaman",
  publisher: "Moniruzzaman",
  robots: "index, follow",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Moniruzzaman | Full-Stack Developer Building Fast, Modern Web Apps",
    description:
      "Full-stack web developer specializing in Next.js, React, Tailwind, Prisma, and scalable backend systems. I build high-performance websites and modern web applications that help businesses grow, improve user experience, and elevate their digital presence.",
    url: "https://dev-moniruzzaman.vercel.app/",
    siteName: "Moniruzzaman Portfolio",
    images: [
      {
        url: "https://dev-moniruzzaman.vercel.app/moniruzzaman.png",
        width: 1200,
        height: 630,
        alt: "Moniruzzaman Portfolio - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Moniruzzaman | Full-Stack Developer Building Fast, Modern Web Apps",
    description:
      "Full-stack web developer specializing in Next.js, React, Tailwind, Prisma, and scalable backend systems. I build high-performance websites and modern web applications that help businesses grow, improve user experience, and elevate their digital presence.",
    site: "@dev_moniruzaman", // Optional
    creator: "@dev_moniruzaman", // Optional
    images: ["https://dev-moniruzzaman.vercel.app/moniruzzaman.png"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080A14] relative `}
      >
        {/* Navbar included on all pages */}
        <Navbar />

        {/* Page content */}
        <main id="main">{children}</main>
        <div
          id="cursor"
          style={{
            position: "fixed",
            width: "20px",
            height: "20px",
            backgroundColor: "#FFFFE0",
            borderRadius: "50%",
            pointerEvents: "none",
            top: 0,
            left: 0,
            zIndex: 9999,
            transform: "translate(-50%, -50%)",
          }}
        />
        <AnimationsRunner />
        {/* Footer included on all pages */}
        <Footer />
      </body>
    </html>
  );
}
