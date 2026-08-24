import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLink, Eyebrow, FinalCta } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İzmir Drone Çekimi, QR Menü & Dijital Marka",
  description: "İzmir ve çevresinde profesyonel drone çekimi; Türkiye genelinde QR Menü ve markaya özel dijital bağlantı sayfası çözümleri.",
  alternates: { canonical: "https://www.omraajans360.com" },
};

const services = [
  { title: "Drone Çekimi", img: "/images/premium/service-drone-premium.webp", desc: "İzmir ve çevresinde profesyonel hava çekimleri.", href: "/drone-cekimi" },
  { title: "Düğün & Nişan", img: "/images/premium/service-wedding-premium.webp", desc: "Özel anlarınızı sinematik görüntülerle ölümsüzleştirin.", href: "/hizmet/dugun-nisan-drone-cekimi" },
  { title: "Emlak & Gayrimenkul", img: "/images/premium/service-realestate-premium.webp", desc: "Konut, villa, arsa ve projeleri güçlü açılarla öne çıkarın.", href: "/hizmet/emlak-drone-cekimi" },
  { title: "Mekân & İşletme", img: "/images/premium/service-venue-premium.webp", desc: "Mekânınızın atmosferini ve konumunu etkileyici biçimde anlatın.", href: "/hizmet/mekan-tanitim-drone-cekimi" },
  { title: "Organizasyon", img: "/images/premium/service-event-premium.webp", desc: "Etkinlik, açılış ve özel organizasyonlara yukarıdan değer katın.", href: "/hizmet/organizasyon-drone-cekimi" },
  { title: "Reklam & Tanıtım", img: "/images/premium/service-advert-premium.webp", desc: "Markanız için sosyal medya ve reklam odaklı içerikler üretin.", href: "/hizmet/reklam-tanitim-drone-cekimi" },
];

const benefits = [
  ["Yüksek Görüntü Kalitesi", "Sosyal medya, web ve kurumsal kullanım için özenli görsel üretim."],
  ["Projeye Özel Planlama", "Her proje ihtiyaca, mekâna ve kullanım alanına göre planlanır."],
  ["Profesyonel Kurgu", "Görüntüler seçilir, düzenlenir ve amaca uygun bir akışa dönüştürülür."],
  ["Doğrudan İletişim", "Tekliften teslimata kadar net ve doğrudan iletişim."],
  ["İzmir & Çevresi", "Drone ve çekim hizmetlerinde İzmir merkezli çalışma."],
  ["Dijital Çözümler Türkiye Geneli", "QR Menü ve Dijital Marka Sayfası hizmetleri konumdan bağımsız sunulur."],
];

export default function Home(){return <main>
 <section className="premium-hero"><div className="premium-hero-media"/><div className="premium-hero-shade"/><div className="wrap premium-hero-content"><Eyebrow>İZMİR MERKEZLİ · GÖRSEL İLETİŞİM</Eyebrow><h1>Hikâyenizi <span>Gökyüzünden</span> Anlatıyoruz.</h1><p>Drone çekimi, tanıtım içerikleri, QR Menü ve Dijital Marka çözümleriyle markanızı, mekânınızı ve hikâyenizi güçlü bir görsel dille sunuyoruz.</p><div className="hero-actions"><Link href="/iletisim?hizmet=Drone%20%C3%87ekimi" className="btn btn-gold">PROJENİZ İÇİN TEKLİF AL <span>→</span></Link><Link href="/drone-cekimi" className="btn btn-dark">HİZMETLERİ KEŞFET</Link></div><div className="hero-proof"><span>Projeye Özel Planlama</span><span>Profesyonel Çekim & Kurgu</span><span>Doğrudan İletişim</span><span>QR Menü & Dijital Marka · Türkiye Geneli</span></div></div></section>

 <section className="section wrap"><div className="section-kicker"><Eyebrow>HİZMETLERİMİZ</Eyebrow><div><h2>Her Projeye Özel Bir Görsel Dil.</h2><p>İşletmelere, markalara ve özel projelere kullanım amacına göre planlanan seçkin görsel çözümler sunuyoruz.</p></div></div><div className="premium-service-grid">{services.map((s,i)=><article className="premium-service" key={s.title}><Image src={s.img} alt={`${s.title} hizmeti`} fill quality={95} sizes="(max-width:640px) 100vw,(max-width:1180px) 50vw,33vw"/><div className="premium-service-shade"/><div className="premium-service-copy"><span className="premium-service-number">0{i+1}</span><div className="premium-service-content"><h3>{s.title}</h3><p>{s.desc}</p><ArrowLink href={s.href}>İncele</ArrowLink></div></div></article>)}</div></section>

 <section className="section premium-benefits home-benefits-premium"><div className="wrap"><div className="section-kicker"><Eyebrow>NEDEN OMRAAJANS360?</Eyebrow><div><h2>Kaliteli Üretim. Net Süreç.</h2><p>Sadece çekim değil; planlama, içerik üretimi, kurgu, dijital çözüm ve teslim sürecini birlikte yönetiyoruz.</p></div></div><div className="home-benefit-grid">{benefits.map(([title,desc],i)=><article className="home-benefit-card" key={title}><div className="home-benefit-top"><span className="benefit-no">0{i+1}</span><i>✦</i></div><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>

 <section className="section qr-feature"><div className="wrap qr-feature-grid"><div className="qr-device" aria-hidden="true"><div className="qr-phone"><div className="qr-phone-top"/><div className="qr-demo-brand">OMRA DEMO</div><h3>Menü</h3><div className="qr-demo-chip">Kahveler</div>{[["latte.jpg","Latte","₺120"],["san-sebastian.jpg","San Sebastian","₺165"],["cold-brew.jpg","Cold Brew","₺135"]].map(([img,name,price])=><div className="qr-demo-row" key={name}><Image src={`/images/qr-menu/${img}`} alt={name} width={42} height={42} className="qr-demo-thumb"/><span>{name}</span><b>{price}</b></div>)}</div><div className="qr-stand"><Image src="/images/qr-menu/qr-demo.png" alt="QR Menü canlı demo QR kodu" width={120} height={120} className="qr-real-code"/><b>Menüyü Tara</b></div></div><div className="qr-premium-content"><Eyebrow>QR MENÜ</Eyebrow><h2>Menünüzü <span>Dijitale Taşıyın.</span></h2><p className="qr-premium-desc">Restoran, kafe, otel ve işletmelere özel QR Menü tasarımlarını hazırlıyor, işletmenize göre uyarlıyor ve yayına alıyoruz.</p><ul className="clean-list qr-premium-list"><li>Mobil uyumlu</li><li>İşletmeye özel tasarım</li><li>Fiyat ve içerik güncelleme</li><li>Özel QR kod</li></ul><div className="hero-actions qr-premium-actions"><Link href="/qr-menu" className="btn btn-outline">QR MENÜYÜ İNCELE →</Link><Link href="/qr-menu/demo/luxury" className="btn btn-dark">CANLI DEMO</Link></div></div></div></section>

 <section className="section wrap home-process-section"><div className="section-kicker"><Eyebrow>DİJİTAL MARKA SAYFASI</Eyebrow><div><h2>Markanızın Tüm Bağlantıları, Tek Noktada.</h2><p>QR kod ile açılan, markanıza özel görünen ve satış kanallarınızı tek ekranda birleştiren yönetilebilir dijital sayfalar hazırlıyoruz.</p></div></div><div className="home-benefit-grid"><article className="home-benefit-card"><div className="home-benefit-top"><span className="benefit-no">01</span><i>✦</i></div><h3>Markanıza Özel</h3><p>Logo, renkler, başlık ve içerikler tamamen markanıza göre hazırlanır.</p></article><article className="home-benefit-card"><div className="home-benefit-top"><span className="benefit-no">02</span><i>✦</i></div><h3>Tek QR, Tüm Kanallar</h3><p>Instagram, Trendyol, web sitesi, WhatsApp ve diğer bağlantılar tek sayfada birleşir.</p></article><article className="home-benefit-card"><div className="home-benefit-top"><span className="benefit-no">03</span><i>✦</i></div><h3>Kolay Yönetim</h3><p>Bağlantılar, logo, renkler, QR adı ve yayın durumu yönetim panelinden güncellenir.</p></article></div><div className="hero-actions" style={{marginTop:32}}><Link href="/dijital" className="btn btn-outline">DİJİTAL MARKAYI İNCELE →</Link><Link href="/dijital/elosy" className="btn btn-dark">CANLI ÖRNEK</Link></div></section>

 <section className="section wrap home-process-section"><div className="section-kicker"><Eyebrow>NASIL ÇALIŞIYORUZ?</Eyebrow><div><h2>Fikirden Teslime, Net Bir Süreç.</h2><p>İlk görüşmeden final teslimine kadar süreci planlı, şeffaf ve kontrollü şekilde ilerletiyoruz.</p></div></div><div className="home-process-grid">{[["01","İletişim","İhtiyacınızı ve projenizin kapsamını birlikte netleştiriyoruz."],["02","Planlama","Çekim, içerik ve teslim planını proje ihtiyacına göre hazırlıyoruz."],["03","Çekim","Planlanan görüntüleri profesyonel ekipmanlarla üretiyoruz."],["04","Kurgu","Görüntüleri seçiyor, düzenliyor ve amaca uygun akışa dönüştürüyoruz."],["05","Teslim","Final içerikleri kullanım alanınıza uygun şekilde teslim ediyoruz."]].map(([no,title,text])=><article className="home-process-card" key={no}><span className="home-process-no">{no}</span><div className="home-process-icon">→</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

 <section className="location-premium"><div className="wrap location-premium-inner"><div><Eyebrow>HİZMET BÖLGESİ</Eyebrow><h2>İzmir'den Gökyüzüne.</h2><p>İzmir merkezli olarak Çeşme, Urla, Alaçatı, Seferihisar, Foça ve çevresinde profesyonel drone çekimi gerçekleştiriyoruz. QR Menü ve Dijital Marka hizmetlerimizi Türkiye genelinde sunuyoruz.</p><div className="locations"><span>İzmir</span><span>Çeşme</span><span>Urla</span><span>Alaçatı</span><span>Seferihisar</span><span>Foça</span></div></div><div className="location-contact"><span>Hızlı Teklif</span><a href={site.whatsappUrl()} target="_blank" rel="noreferrer">{site.phoneDisplay}</a><small>WhatsApp üzerinden hemen yazın.</small></div></div></section>
 <FinalCta title="Sıradaki Hikâye Sizin Olsun." text="Çekim, QR Menü veya Dijital Marka projenizi konuşalım; ihtiyacınıza özel çözümü birlikte belirleyelim." service="Genel"/>
 </main>}
