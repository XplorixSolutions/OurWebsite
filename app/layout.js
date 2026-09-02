import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Xplorix Solutions — Digital Solutions Hub",
  description:
    "Xplorix Solutions is a technology and digital solutions company providing web development, custom software, UI/UX design, e-commerce, branding, IT support, hosting, integrations, and business automation solutions.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "Xplorix Solutions — Digital Solutions Hub",
    description:
      "Xplorix Solutions is a technology and digital solutions company providing web development, custom software, UI/UX design, e-commerce, branding, IT support, hosting, integrations, and business automation solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollRevealInit />
        </LenisProvider>
      </body>
    </html>
  );
}
