import { SessionProvider } from "next-auth/react";
import AppProvider from "@/context/app-provider";
import { auth } from "@/auth";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import CartModal from "@/components/layout/cart-modal";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bakings Shop",
  description: "A NextJs Project by @KodeWithKK",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
          <link
            rel="shortcut icon"
            href="https://blogger.googleusercontent.com/img/a/AVvXsEjiJsyFdqTbr-zK8IeKUJcdiFOTpoN7QNyUkELPbSKOafFNiH3szSqIG7HVqIAqde7k3jBthnwkoueXU3fF0HjH9Nfg-QSNJtw7b_tKsNyZ74zjz105lurwxV5AAillsKMZSGNRxfWnEdNOeyyzbR0Xw2Fo8TISK4ecNdvOxr0faEkDgwPaGKqR3NPHES4"
            type="image/x-icon"
          />
        </head>
        <body className={font.className} suppressHydrationWarning>
          <AppProvider>
            <Navbar />
            <CartModal />

            <div className="min-h-screen bg-[#f7f7f7] pt-[71px] text-gray-975">
              {children}
            </div>
          </AppProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
