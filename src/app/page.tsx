import Image from "next/image";
import Link from "next/link";
import { ArrowLink, Eyebrow, FinalCta } from "@/components/Sections";
import { site } from "@/lib/site";
const services=[
 {title:"Drone Çekimi",img:"/images/premium/service-drone-premium.webp",desc:"İzmir ve çevresinde profesyonel hava çekimleri."},
 {title:"Düğün & Nişan",img:"/images/premium/service-wedding-premium.webp",desc:"Özel anlarınızı sinematik görüntülerle ölümsüzleştirin."},
 {title:"Emlak & Gayrimenkul",img:"/images/premium/service-realestate-premium.webp",desc:"Konut, villa, arsa ve projeleri güçlü açılarla öne çıkarın."},
 {title:"Mekân & İşletme",img:"/images/premium/service-venue-premium.webp",desc:"Mekânınızın atmosferini ve konumunu etkileyici biçimde anlatın."},
 {title:"Organizasyon",img:"/images/premium/service-event-premium.webp",desc:"Etkinlik, açılış ve özel organizasyonlara yukarıdan değer katın."},
 {title:"Reklam & Tanıtım",img:"/images/premium/service-advert-premium.webp",desc:"Markanız için sosyal medya ve reklam odaklı içerikler üretin."},
];
const benefits=[
 ["Yüksek Görüntü Kalitesi","Sosyal medya, web ve kurumsal kullanım için özenli görsel üretim."],
 ["Projeye Özel Planlama","Her proje ihtiyaca, mekâna ve kullanım alanına göre planlanır."],
 ["Profesyonel Kurgu","Görüntüler seçilir, düzenlenir ve amaca uygun bir akışa dönüştürülür."],
 ["Doğrudan İletişim","Tekliften teslimata kadar net ve doğrudan iletişim."],
 ["İzmir & Çevresi","Drone ve çekim hizmetlerinde İzmir merkezli çalışma."],
 ["QR Menü Türkiye Geneli","QR Menü tasarım ve kurulum hizmeti konumdan bağımsız sunulur."],
];
export default function Home(){return <main>
 <section className="premium-hero"><div className="premium-hero-media"/><div className="premium-hero-shade"/><div className="wrap premium-hero-content"><Eyebrow>İZMİR MERKEZLİ · GÖRSEL İLETİŞİM AJANSI</Eyebrow><h1>Hikâyenizi <span>Gökyüzünden</span> Anlatıyoruz.</h1><p>Drone çekimi, tanıtım içerikleri ve QR Menü çözümleriyle markanızı, mekânınızı ve hikâyenizi güçlü bir görsel dille sunuyoruz.</p><div className="hero-actions"><Link href="/iletisim?hizmet=Drone%20%C3%87ekimi" className="btn btn-gold">PROJENİZ İÇİN TEKLİF AL <span>→</span></Link><Link href="/drone-cekimi" className="btn btn-dark">HİZMETLERİ KEŞFET</Link></div><div className="hero-proof"><span>Yüksek Görüntü Kalitesi</span><span>Projeye Özel Planlama</span><span>Doğrudan İletişim</span><span>QR Menü · Türkiye Geneli</span></div></div></section>
 <section className="section wrap"><div className="section-kicker"><Eyebrow>HİZMETLERİMİZ</Eyebrow><div><h2>Görsellerle Değer Katıyoruz.</h2><p>İşletmelere, markalara ve özel projelere ihtiyaca göre görsel çözümler sunuyoruz.</p></div></div>
 <div className="premium-service-grid">
  {services.map((s, i) => (
    <article className="premium-service" key={s.title}>
      <Image
        src={s.img}
        alt={`${s.title} hizmeti`}
        fill
        quality={95}
        sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 33vw"
      />

      <div className="premium-service-shade" />

      <div className="premium-service-copy">
        <span className="premium-service-number">0{i + 1}</span>

        <div className="premium-service-content">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>

          <ArrowLink
            href={
              i === 0
                ? "/drone-cekimi"
                : "/drone-cekimi#hizmetler"
            }
          >
            İncele
          </ArrowLink>
        </div>
      </div>
    </article>
  ))}
</div>
</section>
<section className="section premium-benefits home-benefits-premium">
  <div className="wrap">

    <div className="section-kicker">
      <Eyebrow>NEDEN OMRAAJANS360?</Eyebrow>

      <div>
        <h2>Kaliteli Üretim. Net Süreç.</h2>
        <p>
          Sadece çekim değil; planlama, içerik üretimi, kurgu ve teslim
          sürecini birlikte yönetiyoruz.
        </p>
      </div>
    </div>

    <div className="home-benefit-grid">
      {benefits.map(([title, desc], i) => (
        <article className="home-benefit-card" key={title}>
          <div className="home-benefit-top">
            <span className="benefit-no">0{i + 1}</span>
            <i>✦</i>
          </div>

          <h3>{title}</h3>
          <p>{desc}</p>
        </article>
      ))}
    </div>

  </div>
</section> 
<section className="section qr-feature"><div className="wrap qr-feature-grid"><div className="qr-device" aria-hidden="true"><div className="qr-phone"><div className="qr-phone-top"/><div className="qr-demo-brand">OMRA DEMO</div><h3>Menü</h3><div className="qr-demo-chip">Kahveler</div><div className="qr-demo-row">
  <Image src="/images/qr-menu/latte.jpg" alt="Latte" width={42} height={42} className="qr-demo-thumb" />
  <span>Latte</span>
  <b>₺120</b>
</div>

<div className="qr-demo-row">
  <Image src="/images/qr-menu/san-sebastian.jpg" alt="San Sebastian" width={42} height={42} className="qr-demo-thumb" />
  <span>San Sebastian</span>
  <b>₺165</b>
</div>

<div className="qr-demo-row">
  <Image src="/images/qr-menu/cold-brew.jpg" alt="Cold Brew" width={42} height={42} className="qr-demo-thumb" />
  <span>Cold Brew</span>
  <b>₺135</b>
</div></div><div className="qr-stand">
  <Image
    src="/images/qr-menu/qr-demo.png"
    alt="QR Menü canlı demo QR kodu"
    width={120}
    height={120}
    className="qr-real-code"
  />
  <b>Menüyü Tara</b>
</div></div><div className="qr-premium-content">
  <Eyebrow>QR MENÜ</Eyebrow>

  <h2>
    Menünüzü <span>Dijitale Taşıyın.</span>
  </h2>

  <p className="qr-premium-desc">
    Restoran, kafe, otel ve işletmelere özel QR Menü tasarımlarını
    biz hazırlıyor, işletmenize göre uyarlıyor ve yayına alıyoruz.
  </p>

  <ul className="clean-list qr-premium-list">
    <li>Mobil uyumlu</li>
    <li>İşletmeye özel tasarım</li>
    <li>Fiyat ve içerik güncelleme</li>
    <li>Özel QR kod</li>
  </ul>

  <div className="hero-actions qr-premium-actions">
    <Link href="/qr-menu" className="btn btn-outline">
      QR MENÜYÜ İNCELE →
    </Link>

    <Link href="/qr-menu/demo/luxury" className="btn btn-dark">
      CANLI DEMO
    </Link>
  </div>
</div> 
</div>
</section>
<section className="section wrap home-process-section">
  <div className="section-kicker">
    <Eyebrow>NASIL ÇALIŞIYORUZ?</Eyebrow>

    <div>
      <h2>Fikirden Teslime, Net Bir Süreç.</h2>
      <p>
        İlk görüşmeden final teslimine kadar süreci planlı, şeffaf ve
        kontrollü şekilde ilerletiyoruz.
      </p>
    </div>
  </div>

  <div className="home-process-grid">
    {[
      ["01", "İletişim", "İhtiyacınızı ve projenizin kapsamını birlikte netleştiriyoruz."],
      ["02", "Planlama", "Çekim, içerik ve teslim planını proje ihtiyacına göre hazırlıyoruz."],
      ["03", "Çekim", "Planlanan görüntüleri profesyonel ekipmanlarla üretiyoruz."],
      ["04", "Kurgu", "Görüntüleri seçiyor, düzenliyor ve amaca uygun akışa dönüştürüyoruz."],
      ["05", "Teslim", "Final içerikleri kullanım alanınıza uygun şekilde teslim ediyoruz."]
    ].map(([no, title, text]) => (
      <article className="home-process-card" key={no}>
        <span className="home-process-no">{no}</span>

        <div className="home-process-icon">→</div>

        <h3>{title}</h3>

        <p>{text}</p>
      </article>
    ))}
  </div>
</section>
 <section className="location-premium"><div className="wrap location-premium-inner"><div><Eyebrow>HİZMET BÖLGESİ</Eyebrow><h2>İzmir'den Gökyüzüne.</h2><p>İzmir merkezli olarak Çeşme, Urla, Alaçatı, Seferihisar, Foça ve çevresinde profesyonel drone çekimi gerçekleştiriyoruz.</p><div className="locations"><span>İzmir</span><span>Çeşme</span><span>Urla</span><span>Alaçatı</span><span>Seferihisar</span><span>Foça</span></div></div><div className="location-contact"><span>Hızlı Teklif</span><a href={site.whatsappUrl()} target="_blank" rel="noreferrer">{site.phoneDisplay}</a><small>WhatsApp üzerinden hemen yazın.</small></div></div></section>
 <FinalCta title="Sıradaki Hikâye Sizin Olsun." text="Düğün, organizasyon, gayrimenkul, mekân veya markanız için projenizi konuşalım." service="Drone Çekimi"/>
 </main>}
