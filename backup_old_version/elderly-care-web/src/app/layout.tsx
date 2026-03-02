import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elderly Care – In‑Home Nursing & Senior Care",
  description:
    "Elderly Care provides trusted in‑home nursing and senior care. Licensed nurses visit your home for medications, wound care, personal care, and ongoing support so older adults can age safely at home."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

