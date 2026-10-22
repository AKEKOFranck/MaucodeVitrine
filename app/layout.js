import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "Maucode | Nos réalisations web",
  description: "Découvrez les sites web réalisés par Maucode : projets clients et concepts. Réservez un échange sur WhatsApp.",
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#15143a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}