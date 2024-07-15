import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Shop",
  description: "Generated by create next app",
};
// export const dynamic = "force-dynamic"; // revalidate at most every hour
export const revalidate = 5;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CartProvider>
            <Navbar />
            <ShoppingCartModal />
            {children}
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
