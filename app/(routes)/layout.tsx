import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

import type { Metadata } from "next";
import Script from "next/script";

import HomeLayout from "@/components/layouts/home";

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
      <body className={`font-sans antialiased ${inter.className}`}>
        <HomeLayout>{children}</HomeLayout>
        <Analytics />
      </body>
    </html>
  );
}
