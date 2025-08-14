import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({
  subsets: ['latin'],
  fallback: ['system-ui', 'apple color emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "HomeAway",
  description: "Fill at home? away from home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={inter.className}
        >
          <Providers>
            <Navbar />
            <main className="container py-10">
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
