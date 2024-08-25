import AppProvider from "@/context/AppProvider/AppProvider";
import Navbar from "@/components/layout/Navbar/Navbar";
import WishlistModal from "@/components/layout/WishlistModal/WishlistModal";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bakings Shop",
  description: "A NextJs Project by @KodeWithKK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://blogger.googleusercontent.com/img/a/AVvXsEjiJsyFdqTbr-zK8IeKUJcdiFOTpoN7QNyUkELPbSKOafFNiH3szSqIG7HVqIAqde7k3jBthnwkoueXU3fF0HjH9Nfg-QSNJtw7b_tKsNyZ74zjz105lurwxV5AAillsKMZSGNRxfWnEdNOeyyzbR0Xw2Fo8TISK4ecNdvOxr0faEkDgwPaGKqR3NPHES4"
          type="image/x-icon"
        />
      </head>
      <body>
        <AppProvider>
          <Navbar />
          <WishlistModal />

          <div className="min-h-screen bg-[#f7f7f7] pt-[71px] text-gray-975">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
