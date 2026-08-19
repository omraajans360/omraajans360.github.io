import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, FinalCta } from "@/components/Sections";
import { getServicePage, servicePages } from "@/lib/services";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getServicePage(slug);
  if (!item) return {};
  return {
    title: item.seoTitle,
    description: item.seoDescription,
    alternates: { canonical: `/hizmet/${item.slug}` },
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      images: [{ url: item.image }],
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getServicePage(slug);
  if (!item) notFound();

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <Image src={item.image} alt={`${item.serviceName} profesyonel çekim hizmeti`} fill priority sizes="100vw" />
        <div className="service-detail-overlay" />
        <div className="wrap service-detail-hero-copy">
          <Eyebrow>{item.eyebrow}</Eyebrow>
          <h1>{item.title} <span>{item.accent}</span> Anlatın.</h1>
          <p>{item.description}</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" href={`/iletisim?hizmet=${encodeURIComponent(item.serviceName)}`}>PROJENİZ İÇİN TEKLİF AL →</Link>
            <Link className="btn btn-dark" href="/drone-cekimi">TÜM ÇEKİM HİZMETLERİ</Link>
          </div>
        </div>
      </section>

      <section className="section wrap service-detail-intro">
        <div><Eyebrow>PROJEYE ÖZEL YAKLAŞIM</Eyebrow><h2>{item.introTitle}</h2></div>
        <p>{item.introText}</p>
      </section>

      <section className="section premium-benefits">
        <div className="wrap">
          <div className="section-kicker"><Eyebrow>HİZMET STANDARDI</Eyebrow><div><h2>Her Detay Bir Amaca Hizmet Eder.</h2><p>Çekim planını görüntünün nerede ve nasıl kullanılacağına göre kuruyoruz.</p></div></div>
          <div className="service-detail-grid">
            {item.benefits.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-kicker"><Eyebrow>KULLANIM ALANLARI</Eyebrow><div><h2>Tek Üretim, Güçlü Kullanım Alanları.</h2><p>İçerik kapsamı projenizin hedeflerine göre şekillenir.</p></div></div>
        <div className="service-use-grid">
          {item.useCases.map(([title, text], index) => <article key={title}><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section wrap">
        <div className="section-kicker"><Eyebrow>SIK SORULAN SORULAR</Eyebrow><div><h2>Proje Öncesi Bilmeniz Gerekenler.</h2></div></div>
        <div className="faq">{item.faq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <FinalCta title="Projenizi Birlikte Planlayalım." text="İhtiyacınızı, lokasyonu ve kullanım amacını paylaşın; projenize özel çekim planı ve teklif hazırlayalım." service={item.serviceName} />
    </main>
  );
}
