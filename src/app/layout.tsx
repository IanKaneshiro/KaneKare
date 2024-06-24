import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar";

import connectDB from "@/lib/connectDB";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KanKare",
  description: "Manage your way!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectDB();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
