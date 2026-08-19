import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const themes = {
  minimal: {
    name: "Minimal",
    className: "demo-minimal",
    brand: "MORA",
    type: "COFFEE · PATISSERIE",
  },
  luxury: {
    name: "Lüks",
    className: "demo-luxury",
    brand: "LAVORA",
    type: "RESTAURANT · LOUNGE",
  },
  natural: {
    name: "Doğal",
    className: "demo-natural",
    brand: "TERRA",
    type: "KITCHEN · CAFE",
  },
  modern: {
    name: "Modern",
    className: "demo-modern",
    brand: "NOVA",
    type: "COFFEE · KITCHEN",
  },
} as const;

const products = [
  ["Espresso", "Yoğun aromalı, dengeli espresso", "₺95", "/images/qr-menu/espresso.jpg"],
  ["Latte", "Espresso, süt ve ince mikro köpük", "₺120", "/images/qr-menu/latte.jpg"],
  ["Cold Brew", "Uzun süre soğuk demlenmiş kahve", "₺135", "/images/qr-menu/cold-brew.jpg"],
  ["San Sebastian", "Karamelize üst katman, kremsi doku", "₺165", "/images/qr-menu/san-sebastian.jpg"],
  ["Tiramisu", "Mascarpone, espresso ve kakao", "₺175", "/images/qr-menu/tiramisu.jpg"],
];

export function generateStaticParams() {
  return Object.keys(themes).map((tema) => ({ tema }));
}

export default async function Demo({
  params,
}: {
  params: Promise<{ tema: string }>;
}) {
  const { tema } = await params;
  const theme = themes[tema as keyof typeof themes];

  if (!theme) notFound();

  return (
    <main className={`menu-demo ${theme.className}`}>
      <div className="demo-page-top">
        <Link href="/qr-menu">← OMRAAJANS360 QR Menü</Link>
        <span>CANLI DEMO · {theme.name.toUpperCase()}</span>
      </div>

      <div className="menu-demo-shell">
        <header>
          <div className="demo-brand-row">
            <div className="demo-monogram">{theme.brand[0]}</div>
            <div>
              <small>{theme.type}</small>
              <h1>{theme.brand}</h1>
              <p>Örnek dijital menü tasarımı</p>
            </div>
          </div>
        </header>

        <nav>
          <button>Kahveler</button>
          <button>Tatlılar</button>
          <button>Soğuklar</button>
          <button>Favoriler</button>
        </nav>

        <section>
          {products.map(([n, d, p, img]) => (
            <article key={n}>
              <div className="demo-product-img">
                <Image src={img} alt="" fill sizes="80px" />
              </div>
              <div>
                <h2>{n}</h2>
                <p>{d}</p>
              </div>
              <b>{p}</b>
            </article>
          ))}
        </section>

        <footer>
          <div>
            <small>Bu tasarım OMRAAJANS360 örneğidir.</small>
            <b>İşletmenize özel uyarlanır.</b>
          </div>

          <Link href="/iletisim?hizmet=QR%20Men%C3%BC">
            Bu tasarım için teklif al →
          </Link>
        </footer>
      </div>
    </main>
  );
}