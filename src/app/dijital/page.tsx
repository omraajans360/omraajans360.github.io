import type { Metadata } from "next";
import Link from "next/link";
import "./style.css";

export const metadata: Metadata = {
  title: "Dijital Marka Sayfası",
  description:
    "Markanıza özel QR destekli dijital bağlantı sayfası. Sosyal medya, satış kanalları, iletişim ve kampanya bağlantılarını tek premium sayfada birleştirin.",
};

const features = [
  ["Markanıza Özel Tasarım", "Logo, renkler, başlıklar ve bağlantılar markanızın kimliğine göre hazırlanır."],
  ["Tek QR, Tek Merkez", "Müşteriniz QR kodu okuttuğunda tüm önemli kanallarınıza tek ekrandan ulaşır."],
  ["Satış Kanalları", "Trendyol, web sitesi, Instagram, WhatsApp ve diğer bağlantılar tek sayfada toplanır."],
  ["Kolay Yönetim", "Bağlantılar, logo, renkler, QR adı ve yayın durumu yönetim panelinden değiştirilebilir."],
];

const steps = [
  ["01", "Markanızı Tanıyoruz", "Logo, renkler, satış kanalları ve hedef yönlendirmeleri belirliyoruz."],
  ["02", "Sayfanızı Hazırlıyoruz", "Markanıza özel, mobil öncelikli ve sade bir dijital deneyim oluşturuyoruz."],
  ["03", "QR Kodunuzu Oluşturuyoruz", "Belirlediğiniz adla QR kod hazırlanıyor ve marka sayfanıza bağlanıyor."],
  ["04", "Yayına Alıyoruz", "Sayfanız aktif oluyor; bağlantılarınızı daha sonra yönetim panelinden güncelleyebiliyorsunuz."],
];

export default function DigitalPage() {
  return (
    <main className="digital-service-page">
      <section className="digital-hero wrap">
        <span className="digital-kicker">OMRAAJANS360 · DİJİTAL ÇÖZÜMLER</span>
        <h1>Markanızın tüm bağlantıları, tek premium sayfada.</h1>
        <p>
          Ürün kutusundan mağaza kartına, sosyal medyadan etkinlik alanına kadar kullanabileceğiniz QR kod ile müşterinizi markanıza özel dijital sayfaya yönlendirin.
        </p>
        <div className="digital-actions">
          <Link className="digital-btn primary" href="/iletisim?hizmet=Dijital%20Marka%20Sayfas%C4%B1">Teklif Al</Link>
          <Link className="digital-btn secondary" href="/dijital/elosy">Canlı Örneği İncele</Link>
        </div>
      </section>

      <section className="digital-section wrap">
        <div className="digital-section-head">
          <span>NE SUNUYORUZ?</span>
          <h2>Sadece bir link sayfası değil, markanız için dijital geçiş noktası.</h2>
          <p>Müşterinin ihtiyaç duyduğu tüm önemli yönlendirmeleri düzenli, hızlı ve markanıza ait görünen tek bir ekranda topluyoruz.</p>
        </div>
        <div className="digital-grid">
          {features.map(([title, text]) => (
            <article className="digital-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="digital-showcase">
        <div className="wrap digital-showcase-inner">
          <div>
            <span className="digital-kicker">KULLANIM ALANLARI</span>
            <h2>QR kodu koyabildiğiniz her yerde çalışır.</h2>
            <p>Teşekkür kartı, ürün paketi, mağaza, masa üstü standı, katalog, kartvizit, fuar alanı veya sosyal medya gönderileri.</p>
          </div>
          <div className="digital-use-list">
            <span>Instagram</span><span>Trendyol</span><span>Web Sitesi</span><span>WhatsApp</span><span>Kampanyalar</span><span>Diğer Satış Kanalları</span>
          </div>
        </div>
      </section>

      <section className="digital-section wrap">
        <div className="digital-section-head">
          <span>SÜREÇ</span>
          <h2>Markanız birkaç adımda hazır.</h2>
        </div>
        <div className="digital-steps">
          {steps.map(([no, title, text]) => (
            <article key={no}>
              <b>{no}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="digital-final wrap">
        <span className="digital-kicker">MARKANIZI BAĞLAYIN</span>
        <h2>Müşterinizi doğru kanala, doğru anda yönlendirin.</h2>
        <p>Markanıza özel dijital sayfanızı ve QR kodunuzu birlikte hazırlayalım.</p>
        <Link className="digital-btn primary" href="/iletisim?hizmet=Dijital%20Marka%20Sayfas%C4%B1">Projenizi Başlatalım</Link>
      </section>
    </main>
  );
}
