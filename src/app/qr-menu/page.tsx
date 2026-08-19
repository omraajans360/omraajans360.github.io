import Image from "next/image";
import type {Metadata} from "next"; import Link from "next/link"; import { Eyebrow } from "@/components/Sections";
export const metadata:Metadata={title:"QR Menü Tasarımı",description:"Restoran, kafe, otel ve işletmelere özel premium QR Menü tasarımları. Türkiye geneli hizmet."};
const templates=[
 {name:"Minimal",slug:"minimal",desc:"Açık tonlar, ferah düzen ve sade ürün sunumu."},
 {name:"Lüks",slug:"luxury",desc:"Siyah ve altın detaylı, premium işletmeler için güçlü görünüm."},
 {name:"Doğal",slug:"natural",desc:"Sıcak tonlar ve doğal dokularla samimi restoran/kafe hissi."},
 {name:"Modern",slug:"modern",desc:"Görsel ağırlıklı, dinamik ve güncel bir dijital menü deneyimi."},
];
export default function QrPage(){return <main>
 <section className="qr-premium-hero"><div className="wrap qr-premium-hero-grid"><div><Eyebrow>İŞLETMENİZE ÖZEL · DİJİTAL QR MENÜ</Eyebrow><h1>Menünüzü <span>Dijitale</span> Taşıyın.</h1><p>İşletmenize özel tasarlanan, mobil uyumlu ve kolayca güncellenebilen QR Menü ile müşterilerinize modern bir menü deneyimi sunun.</p><div className="hero-actions"><Link href="/iletisim?hizmet=QR%20Men%C3%BC" className="btn btn-gold">QR MENÜ TEKLİFİ AL →</Link><Link href="/qr-menu/demo/luxury" className="btn btn-dark">CANLI DEMO</Link></div></div><div className="qr-device qr-hero-device" aria-hidden="true"><div className="qr-phone"><div className="qr-phone-top"/><div className="qr-demo-brand">OMRA DEMO</div><h3>Menü</h3><div className="qr-demo-chip">Kahveler</div><div className="qr-demo-row">
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
<img
  src="/images/qr-menu/qr-demo.png"
  alt="QR Menü canlı demo QR kodu"
  className="qr-real-code"
/>
  <b>Menüyü Tara</b>
</div></div></div></section>
<section className="section wrap">
  <div className="section-kicker">
    <Eyebrow>NASIL ÇALIŞIR?</Eyebrow>

    <div>
      <h2>Müşteriniz İçin Tek Hareket Yeterli.</h2>
      <p>
        QR kodu okutulduğu anda menü açılır. Uygulama indirmeden,
        kategori ve ürünlere hızlıca ulaşılır.
      </p>
    </div>
  </div>

  <div className="qr-process-premium">
    <article>
      <span className="qr-process-no">01</span>
      <div className="qr-process-icon">QR</div>
      <h3>QR Kodu Tara</h3>
      <p>Masadaki veya basılı materyaldeki QR kod telefonla okutulur.</p>
    </article>

    <article>
      <span className="qr-process-no">02</span>
      <div className="qr-process-icon">↗</div>
      <h3>Menü Açılır</h3>
      <p>Uygulama indirmeden dijital menü doğrudan tarayıcıda açılır.</p>
    </article>

    <article>
      <span className="qr-process-no">03</span>
      <div className="qr-process-icon">≡</div>
      <h3>Kategorileri İncele</h3>
      <p>Ürünler düzenli kategoriler altında kolayca görüntülenir.</p>
    </article>

    <article>
      <span className="qr-process-no">04</span>
      <div className="qr-process-icon">✓</div>
      <h3>Ürünleri Gör</h3>
      <p>Görsel, açıklama ve fiyat bilgileri tek ekranda sunulur.</p>
    </article>
  </div>
</section> <section className="section qr-features-premium">
  <div className="wrap">

    <div className="section-kicker">
      <Eyebrow>QR MENÜ ÖZELLİKLERİ</Eyebrow>

      <div>
        <h2>İşletmenize Uygun, Sade ve Kullanışlı.</h2>

        <p>
          Dijital menünüz işletmenizin ihtiyaçlarına göre hazırlanır;
          müşterilerinize hızlı, modern ve kolay bir kullanım deneyimi sunar.
        </p>
      </div>
    </div>

    <div className="qr-feature-cards">

      <article>
        <div className="qr-feature-card-top">
          <span>01</span>
          <i>◫</i>
        </div>

        <h3>Mobil Uyumlu</h3>
        <p>
          Telefon ve tablet ekranlarında düzenli ve rahat şekilde görüntülenir.
        </p>
      </article>

      <article>
        <div className="qr-feature-card-top">
          <span>02</span>
          <i>✦</i>
        </div>

        <h3>İşletmeye Özel Tasarım</h3>
        <p>
          Logo, renkler ve görsel yapı işletmenizin kimliğine göre hazırlanır.
        </p>
      </article>

      <article>
        <div className="qr-feature-card-top">
          <span>03</span>
          <i>↻</i>
        </div>

        <h3>Kolay Güncelleme</h3>
        <p>
          Ürün, açıklama, kategori ve fiyat bilgileri kolayca güncellenebilir.
        </p>
      </article>

      <article>
        <div className="qr-feature-card-top">
          <span>04</span>
          <i>≡</i>
        </div>

        <h3>Kategori Sistemi</h3>
        <p>
          Menü içeriğiniz düzenli ve kolay gezilebilir kategorilere ayrılır.
        </p>
      </article>

      <article>
        <div className="qr-feature-card-top">
          <span>05</span>
          <i>↗</i>
        </div>

        <h3>Hızlı Erişim</h3>
        <p>
          Uygulama indirmeden QR kod üzerinden menünüze doğrudan erişilir.
        </p>
      </article>

      <article>
        <div className="qr-feature-card-top">
          <span>06</span>
          <i>QR</i>
        </div>

        <h3>Özel QR Kod</h3>
        <p>
          İşletmenize özel çalışan QR kod hazırlanır ve kullanıma hazır teslim edilir.
        </p>
      </article>

    </div>
  </div>
</section>
<section className="qr-code-stays">
  <div className="wrap qr-code-stays-inner">

    <div className="qr-stays-copy">
      <Eyebrow>ESNEK VE GÜNCEL</Eyebrow>

      <h2>
        Menünüz Değişir.
        <span> QR Kodunuz Değişmez.</span>
      </h2>

      <p>
        Fiyat, ürün, açıklama veya kategori değişikliklerinde mevcut QR
        kodunuzu kullanmaya devam edin. Menünüz güncellensin,
        müşterileriniz her zaman güncel içeriğe ulaşsın.
      </p>

      <div className="qr-stays-benefits">
        <span>✓ Tek QR Kod</span>
        <span>✓ Sürekli Güncel Menü</span>
        <span>✓ Yeniden Baskı Gerektirmez</span>
      </div>
    </div>

    <div className="qr-premium-stand">
      <div className="qr-premium-label">OMRAAJANS360</div>

      <div className="qr-premium-code">
        <img
          src="/images/qr-menu/qr-demo.png"
          alt="QR Menü kodu"
        />
      </div>

      <strong>MENÜYÜ TARA</strong>
      <small>Dijital menüyü görüntülemek için</small>
    </div>

  </div>
</section>
<section className="section wrap">
  <div className="section-kicker">
    <Eyebrow>ŞABLONLARIMIZ</Eyebrow>

    <div>
      <h2>Tarzınızı Seçin, Biz İşletmenize Uyarlayalım.</h2>
      <p>
        Her şablon farklı bir görsel karakter sunar. İşletmenize en uygun
        yapıyı seçip marka kimliğinize göre düzenliyoruz.
      </p>
    </div>
  </div>

  <div className="template-grid premium-templates">
    {templates.map((t, i) => (
      <article key={t.slug} className={`template-card ${t.slug}`}>
        <div className="template-real-preview">
          <div className="template-real-head">
            <span>{t.name}</span>
            <b>Menü</b>
          </div>

          <div className="template-real-items">
            <div>
              <img src="/images/qr-menu/latte.jpg" alt="" />
              <span>
                <b>Latte</b>
                <small>₺120</small>
              </span>
            </div>

            <div>
              <img src="/images/qr-menu/san-sebastian.jpg" alt="" />
              <span>
                <b>San Sebastian</b>
                <small>₺165</small>
              </span>
            </div>

            <div>
              <img src="/images/qr-menu/cold-brew.jpg" alt="" />
              <span>
                <b>Cold Brew</b>
                <small>₺135</small>
              </span>
            </div>
          </div>
        </div>

        <span>0{i + 1}</span>
        <h3>{t.name}</h3>
        <p>{t.desc}</p>

        <Link
          className="text-link"
          href={`/qr-menu/demo/${t.slug}`}
        >
          Canlı incele <span>↗</span>
        </Link>
      </article>
    ))}
  </div>
</section>
<section className="section premium-benefits qr-build-section">
  <div className="wrap">

    <div className="qr-build-layout">

      <div className="qr-build-intro">
        <Eyebrow>BİZ HAZIRLIYORUZ</Eyebrow>

        <h2>
          Menünüzü Baştan Sona
          <span> Biz Kuruyoruz.</span>
        </h2>

        <p>
          Logo, menü, fiyatlar, ürün görselleri ve işletme bilgilerinizi
          alıyoruz. Seçtiğiniz tasarımı markanıza göre düzenliyor, QR kodunuzu
          oluşturuyor ve yayına hazır şekilde teslim ediyoruz.
        </p>

        <div className="qr-build-note">
          <span>01</span>
          <div>
            <small>SİZDEN İSTEDİĞİMİZ</small>
            <b>Menünüz ve işletme bilgileriniz.</b>
          </div>
        </div>
      </div>

      <div className="qr-build-steps">

        {[
          ["01", "Bilgileri Alıyoruz", "Menünüzü, logonuzu ve işletme bilgilerinizi alıyoruz."],
          ["02", "Şablonu Seçiyoruz", "İşletmenizin tarzına en uygun menü yapısını belirliyoruz."],
          ["03", "Tasarlıyoruz", "Renkleri, görselleri ve menü düzenini markanıza uyarlıyoruz."],
          ["04", "QR Kodunu Oluşturuyoruz", "Menünüze doğrudan ulaşan işletmenize özel QR kodu hazırlıyoruz."],
          ["05", "Yayına Alıyoruz", "Son kontrolleri tamamlayıp menünüzü kullanıma hazır hale getiriyoruz."]
        ].map(([no, title, text]) => (
          <div className="qr-build-step" key={no}>
            <span>{no}</span>

            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>

            <i>→</i>
          </div>
        ))}

      </div>
    </div>

    <div className="qr-included">

      <div className="qr-included-title">
        <span>QR MENÜ HİZMETİNE DAHİL</span>
        <p>Kurulumdan yayına kadar ihtiyaç duyacağınız temel hizmetler.</p>
      </div>

      <div className="qr-included-grid">
        {[
          "Özel Tasarım",
          "Mobil Uyum",
          "Menü Kurulumu",
          "Ürün / Fiyat Girişi",
          "Özel QR Kod",
          "Yayına Alma"
        ].map((item, i) => (
          <div key={item}>
            <span>0{i + 1}</span>
            <b>{item}</b>
            <i>✓</i>
          </div>
        ))}
      </div>

    </div>

  </div>
</section>
<section className="section wrap qr-for-section">
  <div className="section-kicker">
    <Eyebrow>KİMLER İÇİN?</Eyebrow>

    <div>
      <h2>Yeme-İçme ve Konaklama Sektörüne Uygun.</h2>
      <p>
        Fiziksel menüsünü dijitale taşımak isteyen farklı işletme türleri için
        markaya özel QR Menü çözümleri hazırlıyoruz.
      </p>
    </div>
  </div>

  <div className="qr-for-grid">
    {[
      ["01", "Restoran", "Menünüzü kategoriler, ürün görselleri ve güncel fiyatlarla dijitale taşıyın.", "R"],
      ["02", "Kafe", "Kahve, içecek, tatlı ve yiyecek menünüzü müşterilerinize hızlıca sunun.", "K"],
      ["03", "Otel", "Restoran, oda servisi ve tesis içi menülerinizi modern bir yapıda sunun.", "O"],
      ["04", "Beach Club", "Yiyecek ve içecek menünüzü mobil kullanıma uygun şekilde misafirlerinize ulaştırın.", "B"],
      ["05", "Pastane", "Tatlı, pasta, içecek ve özel ürünlerinizi görselleriyle birlikte sergileyin.", "P"],
      ["06", "Bistro & Bar", "İçecek ve yemek seçeneklerinizi düzenli ve markanıza uygun bir menüde sunun.", "B"]
    ].map(([no, title, text, icon]) => (
      <article className="qr-for-card" key={title}>
        <div className="qr-for-card-top">
          <span>{no}</span>
          <i>{icon}</i>
        </div>

        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>

        <Link
          href="/iletisim?hizmet=QR%20Men%C3%BC"
          className="qr-for-link"
        >
          QR Menü Teklifi Al <span>→</span>
        </Link>
      </article>
    ))}
  </div>
</section>
<section className="section premium-benefits qr-faq-section">
  <div className="wrap">
    <div className="section-kicker qr-faq-heading">
      <Eyebrow>SIK SORULAN SORULAR</Eyebrow>

      <div>
        <h2>QR Menü Hakkında Merak Edilenler.</h2>
        <p>
          QR Menü kurulumu, güncelleme ve kullanım süreciyle ilgili
          en çok sorulan soruların yanıtlarını inceleyin.
        </p>
      </div>
    </div>

    <div className="faq qr-premium-faq">
      {[
        [
          "QR Menü nasıl çalışır?",
          "Müşteriniz masadaki QR kodu telefonuyla okutur. Menü herhangi bir uygulama indirmeden doğrudan internet tarayıcısında açılır."
        ],
        [
          "Menü sonradan güncellenebilir mi?",
          "Evet. Ürünler, fiyatlar, açıklamalar, görseller ve kategoriler ihtiyaç halinde güncellenebilir."
        ],
        [
          "Fiyat değişince QR kod değişir mi?",
          "Hayır. Menü içeriğiniz güncellense bile mevcut QR kodunuz kullanılmaya devam eder. Yeniden QR kod bastırmanız gerekmez."
        ],
        [
          "Menüye kaç ürün eklenebilir?",
          "Ürün sayısı işletmenizin menü yapısına göre belirlenir. Menü kapsamı ve ihtiyaçlar teklif aşamasında birlikte planlanır."
        ],
        [
          "Birden fazla dil eklenebilir mi?",
          "Evet. Çoklu dil ihtiyacı proje kapsamında değerlendirilerek işletmenize uygun şekilde hazırlanabilir."
        ],
        [
          "Tasarımı işletmemize özel yapıyor musunuz?",
          "Evet. Logo, renkler, ürün görselleri ve genel tasarım dili işletmenizin kurumsal kimliğine göre uyarlanır."
        ],
        [
          "QR kodu nasıl teslim ediyorsunuz?",
          "Menünüz yayına hazırlandıktan sonra işletmenize özel QR kod dijital olarak teslim edilir ve kullanıma hazır hale getirilir."
        ],
        [
          "Ücretlendirme nasıl belirleniyor?",
          "Fiyat; menü kapsamı, ürün sayısı, tasarım ihtiyacı, dil seçenekleri ve ek taleplere göre belirlenir. İşletmenize özel teklif hazırlanır."
        ]
      ].map(([q, a], i) => (
        <details key={q} className="qr-faq-item">
          <summary>
            <span className="qr-faq-number">
              {String(i + 1).padStart(2, "0")}
            </span>

            <strong>{q}</strong>

            <span className="qr-faq-plus">+</span>
          </summary>

          <div className="qr-faq-answer">
            <p>{a}</p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>
<section className="qr-final-cta">
  <div className="wrap qr-final-cta-inner">

    <div className="qr-final-copy">
      <Eyebrow>PROJENİZİ KONUŞALIM</Eyebrow>

      <h2>
        İşletmenize Özel
        <span> QR Menü.</span>
      </h2>

      <p>
        Menünüzü bize gönderin. İşletmenizin kimliğine uygun,
        modern ve kullanışlı QR Menü tasarımınızı hazırlayalım.
      </p>

      <div className="qr-final-proof">
        <span>✓ İşletmeye Özel Tasarım</span>
        <span>✓ Hızlı Kurulum</span>
        <span>✓ Türkiye Geneli</span>
      </div>
    </div>

    <div className="qr-final-actions">
      <Link
        href="/iletisim?hizmet=QR%20Men%C3%BC"
        className="btn btn-gold"
      >
        QR MENÜ TEKLİFİ AL <span>→</span>
      </Link>

      <a
        href="https://wa.me/905529226204?text=Merhaba%20OMRAAJANS360%2C%20QR%20Men%C3%BC%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum."
        target="_blank"
        rel="noreferrer"
        className="btn btn-dark"
      >
        WHATSAPP
      </a>

      <small>
        Menünüzü gönderin, ihtiyacınıza özel teklif hazırlayalım.
      </small>
    </div>

  </div>
</section> </main>}
