import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { DigitalBrand } from '@/lib/digital-brands';
import { safeBrandHref, YUUN_CHANNELS } from '@/lib/yuun';
import styles from './yuun.module.css';

function Icon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'instagram' ? <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/></>
      : kind === 'web' ? <><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6.5h14M5 17.5h14"/></>
      : kind === 'whatsapp' ? <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.1-4.9a8.5 8.5 0 1 1 16.4-3.6Z"/><path d="m8 7-1 2c.8 3.5 3.5 6.2 7 7l2-1-2-2-1 1a8 8 0 0 1-3-3l1-1-2-2Z"/></>
      : kind === 'heart' ? <path d="M12 20 4 12C-1 6 7 0 12 7c5-7 13-1 8 5Z"/>
      : kind === 'review' ? <path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>
      : <><path d="M4 7h16l-1 14H5L4 7Z"/><path d="M8 7V6a4 4 0 0 1 8 0v1"/></>}
  </svg>;
}

export function YuunPage({ brand, preview = false }: { brand: DigitalBrand; preview?: boolean }) {
  const review = brand.links.find(link => link.icon === 'review' && safeBrandHref(link.href));
  const links = brand.links.filter(link => link.icon !== 'review' && safeBrandHref(link.href));
  const missing = preview ? YUUN_CHANNELS.filter(channel => channel.icon !== 'review' && !links.some(link => link.icon === channel.icon)) : [];
  const style = {
    '--yuun-burgundy': /^#[0-9a-f]{6}$/i.test(brand.accent) ? brand.accent : '#310911',
    '--yuun-gold': /^#[0-9a-f]{6}$/i.test(brand.accentSoft) ? brand.accentSoft : '#b99a65',
  } as CSSProperties;

  return <main className={styles.page} style={style}>
    <div className={styles.shell}>
      {preview && <aside className={styles.preview}>Yönetici önizlemesi · Adresi eklenmeyen kanallar yayında görünmez.</aside>}
      <header className={styles.header}>
        {brand.logoSrc ? <Image src={brand.logoSrc} width={150} height={150} priority alt={`${brand.name} logo`} className={styles.logo}/> : <span className={styles.wordmark}>{brand.name}</span>}
        {brand.eyebrow && <p>{brand.eyebrow}</p>}
      </header>
      <div className={styles.hero}>
        <Image src="/images/digital-brands/yuun/hero.webp" alt="" fill sizes="(max-width: 640px) 100vw, 600px" priority/>
      </div>
      <div className={styles.content}>
        <span className={styles.seal}><Icon kind="heart"/></span>
        <section className={styles.welcome} aria-labelledby="yuun-title">
          <h1 id="yuun-title">{brand.title}</h1>
          <p>{brand.description}</p>
        </section>
        {(review || preview) && <section className={styles.review} aria-labelledby="yuun-review">
          <h2 id="yuun-review">Deneyiminiz bizim için değerli</h2>
          <div className={styles.stars} aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <Icon key={i} kind="review"/>)}</div>
          <p>{review?.note || YUUN_CHANNELS[0].note}</p>
          {review ? <a className={styles.reviewButton} href={safeBrandHref(review.href)!} target="_blank" rel="noopener noreferrer">{review.label}<span aria-hidden="true">↗</span><span className={styles.srOnly}> (yeni sekmede açılır)</span></a>
            : <button className={styles.reviewButton} disabled>Siparişimi Değerlendir</button>}
          <small>{review ? 'Deneyiminizi paylaşmak için değerlendirme sayfasını açın.' : 'Değerlendirme bağlantısını admin panelinden ekleyin.'}</small>
        </section>}
        {(links.length > 0 || preview) && <section className={styles.channels} aria-labelledby="yuun-channels">
          <h2 id="yuun-channels"><span>{brand.name} dünyasını keşfedin</span></h2>
          <div className={styles.links}>
            {links.map(link => <a key={link.id} className={`${styles.link} ${link.featured ? styles.featured : ''}`} href={safeBrandHref(link.href)!} target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}><Icon kind={link.icon || 'web'}/></span>
              <span className={styles.linkCopy}><b>{link.label}</b>{link.note && <small>{link.note}</small>}</span>
              <span className={styles.arrow} aria-hidden="true">↗</span><span className={styles.srOnly}> (yeni sekmede açılır)</span>
            </a>)}
            {missing.map(channel => <div key={channel.icon} className={`${styles.link} ${styles.placeholder}`} aria-disabled="true">
              <span className={styles.icon}><Icon kind={channel.icon}/></span>
              <span className={styles.linkCopy}><b>{channel.label}</b><small>Bağlantı bekleniyor</small></span>
            </div>)}
          </div>
        </section>}
      </div>
      <footer className={styles.footer}><span>{brand.name}</span>{brand.footerNote && <p>{brand.footerNote}</p>}</footer>
    </div>
  </main>;
}
