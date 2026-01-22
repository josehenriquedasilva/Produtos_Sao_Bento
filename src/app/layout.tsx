import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Lobster } from "next/font/google";
import Header from "@/componentes/header/page";
import Footer from "@/componentes/footer/footer";

const title = "Produtos São Bento";
const fullBrandTitle =
  "Produtos São Bento - Com Amor e Qualidade para Sua Mesa.";
const description =
  "Descubra o sabor e a tradição das bolachas Produtos São Bento. Com amor e qualidade para sua mesa. Entre em contato e peça já!";
const keywords =
  "bolachas, biscoitos, fábrica de bolachas, produtos são bento, são bento, bolacha doce, bolacha salgada";
const baseUrl = "https://produtos-sao-bento.com/";

export const metadata: Metadata = {
  title: {
    default: `${title} - Com Amor e Qualidade para Sua Mesa.`,
    template: `%s | ${fullBrandTitle}`,
  },
  description: description,
  keywords: keywords.split(",").join(", "),
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: title, url: baseUrl }],
  creator: title,
  publisher: title,

  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/web-app-manifest-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/web-app-manifest-512x512.png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: `${title} | Com Amor e Qualidade para Sua Mesa`,
    description: description,
    url: baseUrl,
    siteName: title,
    images: [
      {
        url: `https://produtos-sao-bento.vercel.app/logoSB-2-compartilhamento.jpg`,
        width: 1200,
        height: 630,
        alt: `${title} | Com Amor e Qualidade para Sua Mesa`,
        type: "image/jpg",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Com Amor e Qualidade para Sua Mesa`,
    description: description,
    images: [`https://produtos-sao-bento.vercel.app/logoSB-2-compartilhamento.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      name: "Produtos São Bento",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `/logoSB.png`,
      },
      description: "Produtos São Bento, Com Amor e Qualidade Para Sua Mesa.",
      // Adicionar o email
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+55 81 98238-4765",
        email: "contato@produtos_sao_bento.com.br",
      },
      // Adicionar o link do WhatsApp
      sameAs: [
        "https://www.instagram.com/produtossaobento?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      ],
    },
    {
      "@type": "WebSite",
      url: baseUrl,
      name: "Produtos São Bento",
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/busca?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lobster",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`antialiased overflow-x-hidden ${poppins.variable} ${lobster.variable}`}
      >
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
