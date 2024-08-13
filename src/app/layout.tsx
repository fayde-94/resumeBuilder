import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Super Resume",
  description: "Build your Resume with 2 clicks!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="flex min-h-screen flex-row ">
          <div className="h-full  w-full flex justify-center">
            <ViewTransitions>{children}</ViewTransitions>
            <Analytics />
          </div>
        </main>
      </body>
    </html>
  );
}
