import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Isa & Pao | Agencia Creativa - Branding, Marketing y Diseño UX/UI",
  description:
    "Agencia especializada en branding, marketing digital, diseño UX/UI, desarrollo web, fotografía y producción audiovisual para empresas que buscan crecer y diferenciarse.",
  openGraph: {
    title: "Isa & Pao | Agencia Creativa",
    description:
      "Creamos experiencias digitales que conectan marcas, personas y resultados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
