import { Geist_Mono } from "next/font/google";

import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Liam Schenk",
  description:
    "Ich bin gelernter Mediamatiker EFZ  und arbeite aktuell beim Schweizerischen Turnverband. Ich arbeite strukturiert, teamorientiert und lerne gerne Neues.",
  keywords:
    "Portfolio, Mediamatiker, Webdesign, Grafikdesign, Multimedia, Swisscom, Schweiz, Liam Schenk, digitale Medien, Ausbildung Mediamatiker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={geistMono.variable}>{children}</body>
    </html>
  );
}
