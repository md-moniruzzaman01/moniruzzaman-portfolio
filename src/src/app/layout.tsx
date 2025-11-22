import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Moniruzzaman | Web Developer for Small Business Solutions",

  // Punchy, local SEO optimized description
  description: "Full-stack web developer in NYC helping small businesses create professional websites and grow online. Projects are built with React and Next.js to improve visibility, drive results, and strengthen online presence.",

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
    "affordable website solutions NY"
  ],

  // Authors and publisher info
  authors: [
    { name: "Moniruzzaman", url: "https://softwara.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/moniruzzaman-ripon" }
  ],
  creator: "Moniruzzaman",
  publisher: "Moniruzzaman",
  robots: "index, follow",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Moniruzzaman | Web Developer for Small Business Solutions",
    description: "Full-stack web developer in NYC helping small businesses create professional websites and grow online. Projects are built with React and Next.js to improve visibility, drive results, and strengthen online presence.",
    url: "https://softwara.com",
    siteName: "Moniruzzaman Portfolio",
    images: [
      {
        url: "https://softwara.com/moniruzzaman.png",
        width: 1200,
        height: 630,
        alt: "Moniruzzaman Portfolio - Web Developer"
      }
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Moniruzzaman | Web Developer for Small Business Solutions",
    description: "Full-stack web developer in NYC helping small businesses create professional websites and grow online. Projects are built with React and Next.js to improve visibility, drive results, and strengthen online presence.",
    site: "@dev_moniruzaman", // Optional
    creator: "@dev_moniruzaman", // Optional
    images: ["https://softwara.com/moniruzzaman.png"]
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
