

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Aside } from "@/components/aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formulário de autenticação",
  description: "Authentication form for neurometa API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100`}>
      <Header />
        {children}
        </body>
    </html>
  );
}
