import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Cantor",
  description: "Singer-songwriter from Westport, CT. Folk, pop & rock with heart. Available for booking.",
  openGraph: {
    title: "Michael Cantor",
    description: "Singer-songwriter based in New York, NY.",
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
