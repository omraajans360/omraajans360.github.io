import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./final-premium.css";
import "./service-premium-overrides.css";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omraajans360.com"),
  title: {
    default: "OMRAAJANS360 | İzmir Drone Çekimi & QR Menü",
    template: "%s | OMRAAJANS360",
  },
  description: "İzmir ve çevresinde profesyonel drone çekimi, tanıtım içerikleri ve Türkiye genelinde QR Menü çözümleri.",
  keywords: [
    "İzmir drone çekimi",
    "drone çekimi İzmir",
    "düğün drone çekimi",
    "emlak drone çekimi",
    "mekan tanıtım çekimi",
    "QR menü",
    "İzmir tanıtım filmi",
  ],
  openGraph: {
    title: "OMRAAJANS360",
    description: "Hikâyenizi gökyüzünden anlatıyoruz.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.omraajans360.com",
    images: [{ url: "/images/og-omraajans360.jpg", width: 1200, height: 630, alt: "OMRAAJANS360" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-omraajans360.jpg"] },
  icons: {
    icon: [
      { url: "/brand/icon-32.png", sizes: "32x32" },
      { url: "/brand/icon-192.png", sizes: "192x192" },
    ],
    apple: "/brand/icon-180.png",
  },
};

export const viewport: Viewport = { themeColor: "#070707", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="tr" suppressHydrationWarning><body suppressHydrationWarning><SiteChrome>{children}</SiteChrome></body></html>;
}
