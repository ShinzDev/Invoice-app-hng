import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap", // Added for better loading performance
});

export const metadata: Metadata = {
  title: "Shinzvoice",
  description: "an invoice app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body 
        className={`${leagueSpartan.variable} font-sans min-h-full flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}