import Header from "@/components/header";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

import Script from "next/script";

import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Mobile Info Site",
    default: "Home",
  },
  description: "A website for information on all smartphones and smart devices",
};

export const dynamic = "force-dynamic";
export const revalidate = 5;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2091112628494439"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`font-sans antialiased min-h-screen min-w-full ${inter.className}`}
      >
        <div className="flex flex-col min-h-screen min-w-full">
          <Header />
          <div className="flex-1 container max-w-6xl">
            <NextTopLoader />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
