import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/drone-cekimi" },
};

export default function DroneLayout({ children }: { children: React.ReactNode }) {
  return children;
}
