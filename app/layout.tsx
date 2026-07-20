import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import BackgroundEffects from "@/components/background/BackgroundEffects";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/common/ScrollProgress";
import CursorGlow from "@/components/common/CursorGlow";
import SoundToggle from "@/components/audio/SoundToggle";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Aymen Shakil",
  description:
    "Software Engineer | Frontend Developer | Future IS Auditor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${heading.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <CursorGlow/>
        <ScrollProgress />
      <ThemeProvider>
      
        <BackgroundEffects />
      
        <div className="relative flex min-h-screen flex-col">
      
          <Navbar />
      
          <main className="relative flex-1">
            {children}
          </main>
      
          <Footer />
      
        </div>
      
      </ThemeProvider>
      <SoundToggle />
      <Analytics />
      </body>
    </html>
  );
}