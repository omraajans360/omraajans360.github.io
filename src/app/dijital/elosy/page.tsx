import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Elosy Shoes | Resmî Bağlantılar",
  description: "Elosy Shoes dünyasını keşfedin. Yeni modelleri inceleyin, koleksiyonu takip edin ve resmî satış kanalına doğrudan ulaşın.",
  robots: { index: false, follow: true },
};

function TrendyolIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path className={styles.bag} d="M5 6.5h14l-1 11H6l-1-11Zm3-2h8v2H8v-2Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect className={styles.ig} x="4" y="4" width="16" height="16" rx="5"/><circle className={styles.ig} cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.9" r="1" fill="currentColor"/></svg>;
}

export default function ElosyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.orbOne} />
        <div className={styles.orbTwo} />
        <section className={styles.card}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>RESMÎ BAĞLANTILAR</span>
            <div className={styles.logo}>
              <Image src="/images/digital-brands/elosy/logo.svg" alt="Elosy Shoes logo" width={720} height={720} priority />
            </div>
            <h1 className={styles.title}>Her adımda kendine özgü bir zarafet.</h1>
            <p className={styles.desc}>Elosy Shoes dünyasını keşfedin. Yeni modelleri inceleyin, koleksiyonu takip edin ve resmî satış kanalımıza doğrudan ulaşın.</p>
          </header>

          <div className={styles.links}>
            <a className={`${styles.link} ${styles.featured}`} href="https://www.trendyol.com/magaza/elosy-shoes-m-772092?channelId=1&sst=0&sk=1" target="_blank" rel="noreferrer">
              <span className={styles.icon}><TrendyolIcon /></span>
              <span className={styles.copy}><b>Trendyol Mağazasını Keşfet</b><small>Elosy Shoes ürünlerini inceleyin</small></span>
              <span className={styles.arrow}>↗</span>
            </a>
            <a className={styles.link} href="https://www.instagram.com/elosyshoes/" target="_blank" rel="noreferrer">
              <span className={styles.icon}><InstagramIcon /></span>
              <span className={styles.copy}><b>Instagram</b><small>@elosyshoes</small></span>
              <span className={styles.arrow}>↗</span>
            </a>
          </div>

          <div className={styles.divider} />
          <div className={styles.note}>
            <span>ELOSY SHOES</span>
            <p>Yeni ürünleri ve güncel paylaşımları sosyal medya hesaplarımızdan takip edebilirsiniz.</p>
          </div>
          <small className={styles.footer}>© ELOSY SHOES</small>
        </section>
      </div>
    </main>
  );
}
