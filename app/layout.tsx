import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Cantor — Electronic Press Kit",
  description: "Singer-songwriter from Westport, CT. Folk, pop & rock with heart. Available for booking.",
  openGraph: {
    title: "Michael Cantor — EPK",
    description: "Singer-songwriter from Westport, CT. Available for booking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
