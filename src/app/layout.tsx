import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

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
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
