import AppProvider from "@/components/AppProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "../assets/sass/style.scss";

export const metadata: Metadata = {
  title:
    "CineDroid | Free Unlimited Downloads for Movies, TV, Animation & Anime",
  description:
    "Download your favorite movies, TV shows, anime, and OTT content for free with CineDroid. Unlimited entertainment awaits in HD quality!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="KT7FZVHjZuIjA1kQEp9GDl9zEljAUdjgHEBaRFv-fpA"
        />
        <link rel="icon" href="/assets/images/cinedroid.com.png" />
      </head>
      <body className={``}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
