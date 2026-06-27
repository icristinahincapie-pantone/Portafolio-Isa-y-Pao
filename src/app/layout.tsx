import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isa & Pao | Agencia Creativa - Branding, Marketing y Diseño Digital",
  description:
    "Agencia especializada en branding, marketing digital, diseño UX/UI, desarrollo web, fotografía y producción audiovisual para empresas que buscan crecer y diferenciarse.",
  keywords: [
    "agencia creativa",
    "branding",
    "marketing digital",
    "diseño UX/UI",
    "desarrollo web",
    "fotografía corporativa",
    "producción audiovisual",
  ],
  openGraph: {
    title: "Isa & Pao | Agencia Creativa",
    description:
      "Creamos experiencias digitales que conectan marcas, personas y resultados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
