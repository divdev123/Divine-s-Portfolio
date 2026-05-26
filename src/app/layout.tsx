import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divine Samuel Adoyi",
  description:
    "Founder & Applied Intelligence Engineer — Finnitrex Solutions Ltd.",
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