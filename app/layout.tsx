import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mai Duy Anh | Affiliate Marketing Portfolio",
  description: "Affiliate Marketing, Creator Management and Data Analytics portfolio of Mai Duy Anh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
