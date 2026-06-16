import type { Viewport } from "next";
import "./globals.css";
import { DEFAULT_SITE_METADATA, SITE_URL } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CouponPopup from "@/components/CouponPopup";
export const metadata = {
  ...DEFAULT_SITE_METADATA,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
    shortcut: '/logo.jpeg',
  },
  verification: {
    google: 'M3G7DutCabpv_Z7J0SU969bNVe3zw2tOuTuw-0UH9gM',
  },
};

export const viewport: Viewport = {
  themeColor: '#f97316',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Tiffica',
    description: 'Best tiffin service in Beawar & Jaipur offering fresh, home-cooked meals delivered daily',
    url: SITE_URL,
    telephone: '+91 9983745802',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Beawar',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    servesCuisine: 'Indian',
    priceRange: '₹₹',
    areaServed: [
      { '@type': 'City', name: 'Beawar' },
      { '@type': 'City', name: 'Jaipur' },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BWM7FG6ZEN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BWM7FG6ZEN');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
       
                    <SiteHeader />
                    <main className="min-h-screen">
                      {children}
                    </main>
                    <SiteFooter />
                    
      </body>
    </html>
  );
}
