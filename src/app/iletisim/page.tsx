import type { Metadata } from "next";
import { Eyebrow } from "@/components/Sections";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim & Teklif Al",
  description: "OMRAAJANS360 drone çekimi, tanıtım ve QR Menü hizmetleri için projenize özel teklif alın.",
  alternates: { canonical: "/iletisim" },
};

export default async function Contact({ searchParams }: { searchParams: Promise<{ hizmet?: string | string[] }> }) {
  const params = await searchParams;
  const defaultService = typeof params.hizmet === "string" ? params.hizmet : "";
  return <main className="contact-page">
    <section className="section wrap contact-head"><Eyebrow>İLETİŞİM & TEKLİF</Eyebrow><h1>Fikrinizi Anlatın.<br />Birlikte Hayata Geçirelim.</h1><p>Drone çekimi, tanıtım içerikleri veya QR Menü projenizi bize anlatın. İhtiyacınızı değerlendirelim, size özel çözüm ve teklif hazırlayalım.</p></section>
    <section className="section wrap contact-grid"><ContactForm defaultService={defaultService} />
      <aside className="contact-side premium-contact-side">
        <div className="contact-region-head"><Eyebrow>HİZMET BÖLGESİ</Eyebrow><h2>İzmir'den Türkiye'ye.</h2><p>Çekim projelerinde İzmir ve çevresi, dijital hizmetlerde ise Türkiye genelinde çalışıyoruz.</p></div>
        <div className="contact-service-cards"><div className="contact-service-card"><span>01</span><h3>Drone & Çekim</h3><p>İzmir ve çevresi</p></div><div className="contact-service-card"><span>02</span><h3>QR Menü</h3><p>Türkiye geneli</p></div><div className="contact-service-card"><span>03</span><h3>Tanıtım & İçerik</h3><p>Projeye göre</p></div></div>
        <div className="contact-channel-grid"><a className="contact-card premium-channel" href={site.whatsappUrl()} target="_blank" rel="noreferrer"><span>WHATSAPP</span><h3>Hızlı teklif alın.</h3><p>{site.phoneDisplay}</p><b>Mesaj gönder →</b></a><a className="contact-card premium-channel" href={site.instagramUrl} target="_blank" rel="noreferrer"><span>INSTAGRAM</span><h3>Çalışmalarımızı görün.</h3><p>{site.instagramHandle}</p><b>Profili görüntüle →</b></a><a className="contact-card premium-channel" href={`mailto:${site.email}`}><span>E-POSTA</span><h3>Doğrudan iletişim.</h3><p>{site.email}</p><b>E-posta gönder →</b></a></div>
      </aside>
    </section>
  </main>;
}
