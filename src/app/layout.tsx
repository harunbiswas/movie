import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "../assets/sass/style.scss";

export const metadata: Metadata = {
  title: "Free movie download",
  description: "A user can download movie free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={``}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
