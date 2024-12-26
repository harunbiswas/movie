import AppProvider from "@/components/AppProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Script from "next/script"; // Import for adding external scripts dynamically
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
      <body>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X8DG6YJX6D"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8DG6YJX6D');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3185793954893543');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}

        {/* Main App Layout */}
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
