import type { Metadata } from "next";

interface BrandsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "All Devices",
  description: "All devices",
};

export default function BrandsLayout({ children }: BrandsLayoutProps) {
  return <>{children}</>;
}
