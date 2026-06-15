import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteTitle = "Construtora Premium em São Paulo | Mariano Construtora & Engenharia";
const siteDescription =
  "Construtora premium em São Paulo especializada em obras de grande porte, reformas de alto padrão, retrofits comerciais, projetos executivos e engenharia de custos.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Mariano Construtora & Engenharia",
  url: "https://www.construtoramariano.com.br",
  logo: "https://www.construtoramariano.com.br/assets/Mariano-Cia-Proposta-de-Logo-2-1024x221.png",
  image: "https://www.construtoramariano.com.br/assets/foto-sobre.jpg",
  description: siteDescription,
  email: "marianoeciacomercial@gmail.com",
  telephone: "+55 11 98132-1663",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Aguanos, 250",
    addressLocality: "Jaguaré",
    addressRegion: "SP",
    postalCode: "05330-000",
    addressCountry: "BR",
  },
  areaServed: ["São Paulo", "São Paulo - SP", "Região Metropolitana de São Paulo"],
  sameAs: ["https://www.instagram.com/construtoramarianoecia"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.construtoramariano.com.br"),
  title: {
    default: siteTitle,
    template: "%s | Mariano Construtora & Engenharia",
  },
  description: siteDescription,
  keywords: [
    "construtora em São Paulo",
    "construtora premium São Paulo",
    "construtora de alto padrão",
    "construção civil São Paulo",
    "obras de grande porte",
    "reformas premium São Paulo",
    "reformas de alto padrão",
    "engenharia de custos",
    "projetos executivos",
    "retrofit corporativo",
    "execução de obras",
  ],
  alternates: {
    canonical: "https://www.construtoramariano.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/assets/cropped-favicon-32x32.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://www.construtoramariano.com.br",
    siteName: "Mariano Construtora & Engenharia",
    images: [
      {
        url: "/assets/foto-sobre.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe da Mariano Construtora & Engenharia em obra de alto padrão",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/foto-sobre.jpg"],
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
    "geo.position": "-23.5505;-46.6333",
    ICBM: "-23.5505, -46.6333",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6S44ZX13X3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6S44ZX13X3');
          `}
        </Script>
      </body>
    </html>
  );
}
