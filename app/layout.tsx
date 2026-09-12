import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Antresole — design & architecture studio",
    template: "%s — Antresole",
  },
  description:
    "Портфолио студии дизайна и архитектуры Antresole: интерьеры, планировочные решения и рабочая документация.",
};

export const viewport: Viewport = {
  themeColor: "#f4f2ed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#main-content">К содержанию</a>
        {children}
      </body>
    </html>
  );
}
