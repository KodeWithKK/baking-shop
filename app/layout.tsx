import { Poppins } from "next/font/google";

import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import CartModal from "@/components/features/cart-modal";
import Navbar from "@/components/layout/navbar";
import AppProvider from "@/context/app-provider";
import TanstackProvider from "@/context/tanstack-provider";
import { auth } from "@/auth";

import "./globals.css";

import LoginRequiredModal from "@/components/layout/login-required-modal";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bakings Shop",
  description: "A NextJs Project by @KodeWithKK",
  icons: "icon.png",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        <SessionProvider session={session}>
          <TanstackProvider>
            <AppProvider>
              <Navbar />
              <CartModal />
              <LoginRequiredModal />

              <div className="min-h-screen bg-[#f7f7f7] pt-[69px] text-gray-975 sm:pt-[71px]">
                {children}
              </div>
            </AppProvider>
          </TanstackProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
