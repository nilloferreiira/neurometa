import { SideBar } from "@/components/aside/side-bar";
import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className}  bg-zinc-100 flex flex-col gap-20`}>
        <div className="">
          <Header />
          <SideBar />
        </div>
        {children}
        </body>
    </html>
  );
}
