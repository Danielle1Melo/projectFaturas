import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const myFont = localFont({
  src: "../assets/font/Kollektif.woff2",
  display: "auto",
});

export const metadata: Metadata = {
  title: "Área Cliente",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
