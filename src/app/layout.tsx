import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ReducedMotionProvider } from "@/components/ReducedMotionProvider";
import { PageTransition } from "@/components/PageTransition";
import { GlobalTextAnimator } from "@/components/GlobalTextAnimator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Varun Bhadurgatte Nagaraj | AI, Robotics, Simulation",
  description:
    "A cinematic technical portfolio for Varun Bhadurgatte Nagaraj, focused on AI systems, robotics simulation, full-stack engineering, research, and community leadership.",
  icons: {
    icon: "/vbn.svg",
    shortcut: "/vbn.svg",
    apple: "/vbn.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning>
        <ReducedMotionProvider>
          <ScrollProgress />
          <Navbar />
          <GlobalTextAnimator />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <div className="noise" />
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
