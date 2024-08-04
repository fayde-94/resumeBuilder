import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/ui/SideBar";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <SideBar />
          <EdgeStoreProvider>
            <div className="h-full  w-full flex justify-center">{children}</div>
          </EdgeStoreProvider>
        </main>
      </body>
    </html>
  );
}
