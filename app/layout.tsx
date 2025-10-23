// import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./home.css";


export const metadata: Metadata = {
  title: "Humble Abode",
  description: "Welcome, distant travellers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
