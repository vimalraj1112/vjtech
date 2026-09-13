import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vimal | Software Developer",
  description:
    "Portfolio of Vimal, a Software Developer based in Bengaluru building modern web applications, backend systems, APIs and real-world software products.",
  keywords: [
    "Vimal",
    "Software Developer",
    "Bengaluru",
    "React",
    "Node.js",
    "Django",
    "Python",
    "Full Stack Developer",
    "Backend Developer",
    "Web Applications",
    "Portfolio",
  ],
  authors: [{ name: "Vimal" }],
  openGraph: {
    title: "Vimal | Software Developer",
    description:
      "Software Developer building modern web applications, backend systems and real-world software products in Bengaluru, India.",
    type: "website",
    locale: "en_US",
    siteName: "Vimal — Software Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimal | Software Developer",
    description:
      "Software Developer building modern web applications, backend systems and real-world software products in Bengaluru, India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#050505] text-white font-sans antialiased">
        <div className="noise-overlay" />
        <div className="grid-bg" />
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
        {children}
      </body>
    </html>
  );
}
