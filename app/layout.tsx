import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discover Our Products | Appscrip Store",
  description:
    "Explore our curated collection of premium products. Shop the latest fashion, electronics, jewellery and more at unbeatable prices.",
  keywords: "products, shop, fashion, electronics, jewellery, ecommerce",
  openGraph: {
    title: "Discover Our Products | Appscrip Store",
    description:
      "Explore our curated collection of premium products across all categories.",
    type: "website",
    siteName: "Appscrip Store",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
