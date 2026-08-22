import type { Metadata } from "next";
import "./globals.css";
import "./profile-overrides.css";

export const metadata: Metadata = {
  title: "Mai Duy Anh — Affiliate Marketing Portfolio",
  description: "Affiliate Marketing, Creator Management and Performance Analytics portfolio of Mai Duy Anh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}