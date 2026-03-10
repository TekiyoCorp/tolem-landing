import type { Metadata } from "next";
import { Outfit, Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "TOLEM | Horlogerie Française",
  description: "Maison d'horlogerie française. Double héritage : excellence joaillière et ingénierie industrielle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${beVietnamPro.variable} ${jetbrainsMono.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
