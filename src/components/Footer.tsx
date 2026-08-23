import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { site } from "@/lib/site";

function ServiceLinks() {
  return <>
    <Link href="/drone-cekimi">Drone Çekimi</Link>
    <Link href="/hizmet/dugun-nisan-drone-cekimi">Düğün & Nişan</Link>
    <Link href="/hizmet/emlak-drone-cekimi">Emlak & Gayrimenkul</Link>
    <Link href="/hizmet/mekan-tanitim-drone-cekimi">Mekân & İşletme</Link>
    <Link href="/hizmet/organizasyon-drone-cekimi">Organizasyon</Link>
    <Link href="/hizmet/reklam-tanitim-drone-cekimi">Reklam & Tanıtım</Link>
    <Link href="/hizmet/arazi-proje-drone-cekimi">Arazi & Proje</Link>
    <Link href="/qr-menu">QR Menü</Link>
    <Link href="/dijital">Dijital Marka Sayfası</Link>
  </>;
}

function ContactLinks() {
  return <>
    <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
    <a href={site.whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
    <a href={`mailto:${site.email}`}>{site.email}</a>
    <a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a>
  </>;
}

function RegionLinks() {
  return <>
    <p>Drone: İzmir ve çevresi</p>
    <p>QR Menü: Türkiye geneli</p>
    <p>Dijital Marka: Türkiye geneli</p>
    <Link href="/iletisim">Projeniz için teklif alın →</Link>
  </>;
}

function FooterBrand() {
  return <div className="footer-brand">
    <BrandLogo />
    <p className="footer-copy">İzmir ve çevresinde profesyonel drone çekimleri; Türkiye genelinde QR Menü ve dijital marka sayfası çözümleri.</p>
    <div className="footer-social">
      <a href={site.instagramUrl} target="_blank" rel="noreferrer">Instagram {site.instagramHandle}</a>
      <a href={site.whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
    </div>
  </div>;
}

export function Footer() {
  return <footer className="footer">
    <div className="wrap footer-grid footer-desktop">
      <FooterBrand />
      <div><h3>Hizmetler</h3><ServiceLinks /></div>
      <div><h3>İletişim</h3><ContactLinks /></div>
      <div><h3>Hizmet Bölgesi</h3><RegionLinks /></div>
    </div>

    <div className="wrap footer-mobile">
      <FooterBrand />
      <div className="footer-mobile-accordions">
        <details>
          <summary>Hizmetler <span aria-hidden="true">+</span></summary>
          <div className="footer-mobile-panel"><ServiceLinks /></div>
        </details>
        <details>
          <summary>İletişim <span aria-hidden="true">+</span></summary>
          <div className="footer-mobile-panel"><ContactLinks /></div>
        </details>
        <details>
          <summary>Hizmet Bölgesi <span aria-hidden="true">+</span></summary>
          <div className="footer-mobile-panel"><RegionLinks /></div>
        </details>
      </div>
    </div>

    <div className="wrap footer-bottom">
      <span>© 2026 OMRAAJANS360. Tüm hakları saklıdır.</span>
      <span><Link href="/gizlilik">Gizlilik</Link> · <Link href="/kvkk">KVKK</Link> · <Link href="/cerez-politikasi">Çerez Politikası</Link></span>
    </div>
  </footer>;
}
