import AppProvider from "@/components/AppProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "../assets/sass/style.scss";

export const metadata: Metadata = {
  title: "CineDroid | Free movie download",
  description: "A user can download movie free",
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
