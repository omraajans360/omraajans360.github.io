import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { site } from "@/lib/site";

export function Footer(){return <footer className="footer"><div className="wrap footer-grid">
 <div className="footer-brand"><BrandLogo/><p className="footer-copy">İzmir ve çevresinde profesyonel drone çekimleri, tanıtım içerikleri ve Türkiye genelinde QR Menü çözümleri.</p><div className="footer-social"><a href={site.instagramUrl} target="_blank" rel="noreferrer">Instagram {site.instagramHandle}</a><a href={site.whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a></div></div>
 <div><h3>Hizmetler</h3><Link href="/drone-cekimi">Drone Çekimi</Link><Link href="/hizmet/dugun-nisan-drone-cekimi">Düğün & Nişan</Link><Link href="/hizmet/emlak-drone-cekimi">Emlak & Gayrimenkul</Link><Link href="/hizmet/mekan-tanitim-drone-cekimi">Mekân & İşletme</Link><Link href="/hizmet/reklam-tanitim-drone-cekimi">Reklam & Tanıtım</Link><Link href="/qr-menu">QR Menü</Link></div>
 <div><h3>İletişim</h3><a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a><a href={site.whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a></div>
 <div><h3>Hizmet Bölgesi</h3><p>Drone: İzmir ve çevresi</p><p>QR Menü: Türkiye geneli</p><Link href="/iletisim">Projeniz için teklif alın →</Link></div>
 </div><div className="wrap footer-bottom"><span>© 2026 OMRAAJANS360. Tüm hakları saklıdır.</span><span><Link href="/gizlilik">Gizlilik</Link> · <Link href="/kvkk">KVKK</Link> · <Link href="/cerez-politikasi">Çerez Politikası</Link></span></div></footer>}
