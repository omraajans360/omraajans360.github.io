import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { digitalBrands, getDigitalBrand } from "@/lib/digital-brands";
import "./style.css";

export function generateStaticParams() {
  return digitalBrands.filter((brand) => brand.active).map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = getDigitalBrand(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} | Resmi Bağlantılar`,
    description: brand.description,
    robots: { index: false, follow: true },
  };
}

export default async function DigitalBrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getDigitalBrand(slug);
  if (!brand) notFound();

  const style = { "--brand-accent": brand.accent, "--brand-accent-soft": brand.accentSoft } as CSSProperties;

  return (
    <main className="db-page" style={style}>
      <section className="db-card">
        {brand.logoSrc ? (
          <div className="db-logo-wrap">
            <Image src={brand.logoSrc} alt={brand.logoAlt ?? brand.name} width={260} height={180} priority className="db-logo" />
          </div>
        ) : <strong className="db-wordmark">{brand.name}</strong>}

        <span className="db-eyebrow">{brand.eyebrow}</span>
        <h1>{brand.title}</h1>
        <p className="db-description">{brand.description}</p>

        <div className="db-links">
          {brand.links.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={item.featured ? "featured" : ""}>
              <span><b>{item.label}</b>{item.note && <small>{item.note}</small>}</span>
              <i aria-hidden>↗</i>
            </a>
          ))}
        </div>

        <div className="db-note">Resmi Elosy Shoes bağlantıları</div>
        {brand.footerNote && <small className="db-footer">{brand.footerNote}</small>}
      </section>
    </main>
  );
}
