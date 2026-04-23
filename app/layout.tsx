import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

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
      <body className={`${spartan.variable} font-sans antialiased bg-[#F8F8FB] text-[#0C0E16] dark:bg-[#141625] dark:text-white transition-colors duration-300`}>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </NextThemesProvider>
      </body>
    </html>
  );
}