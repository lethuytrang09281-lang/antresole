import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Antresole — design & architecture studio",
    template: "%s — Antresole",
  },
  description:
    "Портфолио студии дизайна и архитектуры Antresole: интерьеры, планировочные решения и рабочая документация.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
