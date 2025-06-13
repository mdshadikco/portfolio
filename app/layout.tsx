import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FolderOpen, Home, Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio- Md Shadik",
  description: "Next Js Features with portfolio",
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
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-purple-500/10`}
        >
          <div className="flex justify-center items-center p-2 gap-4">
            <Link
              href={"/"}
              className="flex gap-2 border border-transparent items-center hover:border-b-slate-300 transition-all duration-300"
            >
              <Home className="w-4 h-4" /> Home
            </Link>
            <Link
              href={"/projects"}
              className="flex gap-2 border border-transparent items-center hover:border-b-slate-300 transition-all duration-300"
            >
              <FolderOpen className="w-4 h-4" /> Projects
            </Link>
            <Link
              href={"/contact"}
              className="flex gap-2 border border-transparent items-center hover:border-b-slate-300 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Contacts
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
