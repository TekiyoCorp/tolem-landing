import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "TOLEM | Horlogerie Française",
  description:
    "Maison d'horlogerie française. Double héritage : excellence joaillière et ingénierie industrielle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
