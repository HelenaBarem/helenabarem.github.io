import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { getPublicSiteUrl } from "@/lib/site-url";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-display",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const siteUrl = getPublicSiteUrl();
const title = "Helena Barem Beauty | Sobrancelhas, cílios e maquiagem em Campo Grande MS";
const description =
  "Design de sobrancelhas, cílios, Hydragloss, Hydracollor e maquiagem profissional na Helena Barem Beauty, em Campo Grande/MS. Agendamentos pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  robots: {
    index: Boolean(siteUrl),
    follow: Boolean(siteUrl),
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Helena Barem Beauty",
    title,
    description,
    url: siteUrl?.toString(),
    images: siteUrl
      ? [
          {
            url: new URL("/images/helena-barem-retrato-1080.webp", siteUrl).toString(),
            width: 1080,
            height: 1080,
            alt: "Helena Barem, retrato do perfil oficial",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: siteUrl ? [new URL("/images/helena-barem-retrato-1080.webp", siteUrl).toString()] : undefined,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3D050C",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={displayFont.variable + " " + bodyFont.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          type="image/avif"
          imageSrcSet="/images/helena-barem-retrato-480.avif 480w, /images/helena-barem-retrato-800.avif 800w, /images/helena-barem-retrato-1080.avif 1080w"
          imageSizes="(max-width: 760px) 86vw, 42vw"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
