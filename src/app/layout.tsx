import type { Metadata } from "next";
import { Lusitana  } from "next/font/google";
import "./globals.css";

import {constructMetadata} from "./lib/utils";

import Navbar from "./components/navbar";

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
