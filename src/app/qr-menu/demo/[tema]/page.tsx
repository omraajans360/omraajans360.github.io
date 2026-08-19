import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = { robots: { index: false, follow: false } };

const themes = {
  minimal: { name: "Minimal", className: "demo-minimal", brand: "MORA", type: "COFFEE · PATISSERIE", note: "Sade. Ferah. Zamansız." },
  luxury: { name: "Lüks", className: "demo-luxury", brand: "LAVORA", type: "RESTAURANT · LOUNGE", note: "Seçkin sofralar için rafine sunum." },
  natural: { name: "Doğal", className: "demo-natural", brand: "TERRA", type: "KITCHEN · CAFE", note: "Doğal malzemeler, sıcak bir deneyim." },
  modern: { name: "Modern", className: "demo-modern", brand: "NOVA", type: "COFFEE · KITCHEN", note: "Dinamik, hızlı ve görsel odaklı." },
} as const;

const products = [
  ["Espresso", "Yoğun aromalı, dengeli espresso", "₺95", "/images/qr-menu/espresso.jpg", "BARISTA SEÇİMİ"],
  ["Latte", "Espresso, süt ve ince mikro köpük", "₺120", "/images/qr-menu/latte.jpg", "ÇOK SEVİLEN"],
  ["Cold Brew", "Uzun süre soğuk demlenmiş kahve", "₺135", "/images/qr-menu/cold-brew.jpg", "SOĞUK"],
  ["San Sebastian", "Karamelize üst katman, kremsi doku", "₺165", "/images/qr-menu/san-sebastian.jpg", "İMZA TATLI"],
  ["Tiramisu", "Mascarpone, espresso ve kakao", "₺175", "/images/qr-menu/tiramisu.jpg", "GÜNLÜK"],
] as const;

export function generateStaticParams() { return Object.keys(themes).map((tema) => ({ tema })); }

export default async function Demo({ params }: { params: Promise<{ tema: string }> }) {
  const { tema } = await params;
  const theme = themes[tema as keyof typeof themes];
  if (!theme) notFound();

  return (
    <main className={`menu-demo premium-menu-demo ${theme.className}`}>
      <div className="demo-page-top">
        <Link href="/qr-menu">← OMRAAJANS360 QR Menü</Link>
        <span>CANLI DEMO · {theme.name.toUpperCase()}</span>
      </div>

      <div className="menu-demo-shell">
        <header className="demo-menu-header">
          <div className="demo-brand-row">
            <div className="demo-monogram">{theme.brand[0]}</div>
            <div className="demo-brand-copy">
              <small>{theme.type}</small>
              <h1>{theme.brand}</h1>
              <p>{theme.note}</p>
            </div>
          </div>
          <div className="demo-service-meta">
            <span><b>●</b> Şu an açık</span>
            <span>09:00 — 23:30</span>
          </div>
        </header>

        <div className="demo-welcome">
          <span>HOŞ GELDİNİZ</span>
          <h2>Bugün ne seçmek istersiniz?</h2>
          <p>Özenle hazırlanan içecek ve tatlılarımızı keşfedin.</p>
        </div>

        <nav className="demo-category-nav" aria-label="Menü kategorileri">
          <button className="active">Kahveler</button>
          <button>Tatlılar</button>
          <button>Soğuklar</button>
          <button>Favoriler</button>
        </nav>

        <section className="demo-featured">
          <div className="demo-featured-media">
            <Image src="/images/qr-menu/latte.jpg" alt="Latte" fill priority sizes="(max-width:700px) 100vw, 420px" />
          </div>
          <div className="demo-featured-copy">
            <span>GÜNÜN ÖNERİSİ</span>
            <h2>Signature Latte</h2>
            <p>Çift espresso, ipeksi süt ve dengeli kavrum notalarıyla hazırlanan özel reçetemiz.</p>
            <div><b>₺145</b><small>Yeni</small></div>
          </div>
        </section>

        <section className="demo-product-section">
          <div className="demo-section-head"><div><span>KAHVELER & TATLILAR</span><h2>Menü Seçkisi</h2></div><small>5 ürün</small></div>
          <div className="demo-products-grid">
            {products.map(([n, d, p, img, badge]) => (
              <article key={n} className="demo-product-card">
                <div className="demo-product-img"><Image src={img} alt={n} fill sizes="180px" /></div>
                <div className="demo-product-copy"><span>{badge}</span><h3>{n}</h3><p>{d}</p></div>
                <b className="demo-product-price">{p}</b>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-info-strip">
          <div><span>Wi‑Fi</span><b>LAVORA_GUEST</b></div>
          <div><span>Konum</span><b>İzmir · Alsancak</b></div>
          <div><span>Servis</span><b>Masa & Paket</b></div>
        </section>

        <footer className="demo-premium-footer">
          <div><small>OMRAAJANS360 QR MENÜ DEMOSU</small><b>Bu tasarım işletmenizin logosu, renkleri ve menüsüyle size özel hazırlanır.</b></div>
          <Link href="/iletisim?hizmet=QR%20Men%C3%BC">BU TASARIM İÇİN TEKLİF AL <span>→</span></Link>
        </footer>
      </div>
    </main>
  );
}
