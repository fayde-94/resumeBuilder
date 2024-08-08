import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/ui/SideBar";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

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
          {/* <div className="w-[100px] min-w-[100px]">
            <SideBar />
          </div> */}
          <EdgeStoreProvider>
            <div className="h-full  w-full flex justify-center">
              {children}
              <Analytics />
            </div>
          </EdgeStoreProvider>
        </main>
      </body>
    </html>
  );
}
