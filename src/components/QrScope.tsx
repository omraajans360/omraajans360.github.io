import Link from "next/link";
import { Eyebrow } from "./Sections";

const scopes = [
  {
    no: "01",
    title: "Temel",
    text: "Menüsünü hızlı ve temiz biçimde dijitale taşımak isteyen işletmeler için.",
    items: ["Mobil uyumlu QR Menü", "Kategori ve ürün kurulumu", "İşletmeye özel QR kod", "Yayına alma"],
  },
  {
    no: "02",
    title: "Plus",
    text: "Marka görünümünü güçlendirmek ve daha zengin ürün sunumu isteyen işletmeler için.",
    items: ["Temel kapsamın tamamı", "Markaya özel görsel düzen", "Ürün görselleriyle zengin sunum", "İçerik ve fiyat güncelleme desteği"],
  },
  {
    no: "03",
    title: "Özel",
    text: "Standart menü yapısının ötesinde özel akış ve tasarım ihtiyacı olan projeler için.",
    items: ["Projeye özel arayüz", "Özel kategori ve içerik yapısı", "Gelişmiş görsel uyarlama", "İhtiyaca göre özel kapsam"],
  },
];

export function QrScope() {
  return <section className="section wrap qr-scope-section" aria-labelledby="qr-scope-title">
    <div className="section-kicker"><Eyebrow>HİZMET KAPSAMLARI</Eyebrow><div><h2 id="qr-scope-title">İşletmenize Uygun Kapsamı Seçin.</h2><p>Hazır fiyat dayatmak yerine menü yapınıza, ürün sayınıza ve tasarım ihtiyacınıza göre doğru kapsamı belirliyoruz.</p></div></div>
    <div className="qr-scope-grid">{scopes.map((scope) => <article className="qr-scope-card" key={scope.title}><span>{scope.no}</span><h3>{scope.title}</h3><p>{scope.text}</p><ul>{scope.items.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/iletisim?hizmet=${encodeURIComponent("QR Menü")}`}>Bu kapsam için teklif al <span>↗</span></Link></article>)}</div>
  </section>;
}
