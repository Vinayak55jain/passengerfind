import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600"],
});



export const metadata: Metadata = {
  title: "Vinayak Jain | Portfolio (Cyber-Minimalist Edition)",
  description: "Systems Architect & Creative Developer portfolio of Vinayak Jain, engineering high-performance infrastructure.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${anton.variable} ${montserrat.variable} selection:bg-primary/20 selection:text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
