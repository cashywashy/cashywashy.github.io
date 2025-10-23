import type { Metadata } from "next";
import "../home.css";


export const metadata: Metadata = {
  title: "Experimental Hub",
  description: "There can be no breakthroughs without the meddling with nature. Thus is experimentation.",
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
