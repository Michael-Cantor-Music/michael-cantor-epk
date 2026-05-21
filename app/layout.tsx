import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Cantor | Singer-Songwriter",
  description: "Michael Cantor is a singer-songwriter from Westport, CT. Folk, pop & rock with heart. Available for booking. michaelcantor.com",
  metadataBase: new URL("https://michaelcantor.com"),
  alternates: {
    canonical: "https://michaelcantor.com",
  },
  openGraph: {
    title: "Michael Cantor | Singer-Songwriter",
    description: "Singer-songwriter based in New York, NY. Folk, pop & rock with heart.",
    type: "website",
    url: "https://michaelcantor.com",
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
