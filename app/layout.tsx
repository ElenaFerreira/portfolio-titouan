import type { Metadata } from "next";
import "./globals.css";
import { MusicPlayer } from "./components/MusicPlayer";

export const metadata: Metadata = {
  title: "Titouan Francois | UI/UX Designer",
  description: "Portfolio de Titouan Francois, Product Designer spécialisé en conception d'expériences utilisateur, interfaces web et produits digitaux.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Titouan - Portfolio" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </head>
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
