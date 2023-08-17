import type { Metadata } from "next";

interface BrandsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "All Brands",
  description: "All Brands for Smartphone Devices",
};

export default function BrandsLayout({ children }: BrandsLayoutProps) {
  return <>{children}</>;
}
