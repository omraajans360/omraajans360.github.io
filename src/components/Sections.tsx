import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Eyebrow({
  children,
}: {
  children: ReactNode;
}) {
  return <p className="eyebrow">{children}</p>;
}

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <span>↗</span>
    </Link>
  );
}

export function FinalCta({
  title = "Projenizi Gökyüzüne Taşıyalım.",
  text = "İhtiyacınızı anlatın, projenize özel teklif hazırlayalım.",
  service = "Genel",
}: {
  title?: string;
  text?: string;
  service?: string;
}) {
  return (
    <section className="final-cta">
      <div className="wrap final-cta-inner">
        <div>
          <Eyebrow>PROJENİZİ KONUŞALIM</Eyebrow>

          <h2>{title}</h2>

          <p>{text}</p>
        </div>

        <div className="cta-actions">
          <Link
            href={`/iletisim?hizmet=${encodeURIComponent(service)}`}
            className="btn btn-gold"
          >
            ÖZEL TEKLİF AL <span>→</span>
          </Link>

          <a
            className="btn btn-dark"
            href={site.whatsappUrl(
              `Merhaba OMRAAJANS360, ${service} hizmeti için teklif almak istiyorum.`
            )}
            target="_blank"
            rel="noreferrer"
          >
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}