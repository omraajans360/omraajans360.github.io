import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/qr-menu" },
};

export default function QrMenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
