import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
