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
      <body style={{margin: 0}}>
        {children}
      </body>
    </html>
  );
}
