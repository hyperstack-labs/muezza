import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Muezza | Ambassador of Barakah on SidraChain",
  description:
    "Muezza is the first philanthropic Web3 ambassador on SidraChain, connecting ethical blockchain technology with global charity through Shariah-compliant smart contracts.",
  keywords: ["Muezza", "SidraChain", "Web3", "Islamic finance", "Zakat", "Sadaqah", "ethical blockchain", "halal crypto"],
  openGraph: {
    title: "Muezza | Ambassador of Barakah on SidraChain",
    description:
      "Ethical blockchain meets real-world philanthropy. Muezza stands for Character, Charity, Cheerfulness and Creativity on SidraChain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased noise min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
