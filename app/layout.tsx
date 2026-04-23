import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "ShinzDev Invoice App",
  description: "Invoice management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body className="bg-[#f8f8fb] flex flex-col lg:flex-row min-h-screen transition-all">
            {/* Sidebar takes up fixed space on desktop */}
            <Sidebar />
            
            {/* Main takes up the REMAINING space */}
            <main className="flex-1 lg:h-screen overflow-y-auto px-6 py-8 lg:py-16">
              {/* This wrapper keeps your content centered and readable */}
              <div className="max-w-3xl mx-auto w-full">
                {children}
              </div>
            </main>
          </body>
        </html>
  );
}