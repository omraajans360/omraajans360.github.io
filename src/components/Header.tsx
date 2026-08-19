"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { site } from "@/lib/site";

const links = [["Ana Sayfa", "/"], ["Drone Çekimi", "/drone-cekimi"], ["QR Menü", "/qr-menu"], ["Hakkımızda", "/hakkimizda"], ["İletişim", "/iletisim"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isActive = (href: string) => path === href || (href === "/drone-cekimi" && path.startsWith("/hizmet/")) || (href !== "/" && path.startsWith(`${href}/`));

  return <header className="site-header"><div className="wrap header-inner"><BrandLogo />
    <nav className="desktop-nav" aria-label="Ana menü">{links.map(([label, href]) => <Link className={isActive(href) ? "active" : ""} aria-current={isActive(href) ? "page" : undefined} key={href} href={href}>{label}</Link>)}</nav>
    <Link className="btn btn-outline header-cta" href="/iletisim">TEKLİF AL <span>→</span></Link>
    <a className="header-phone" href={`tel:${site.phoneE164}`} aria-label={`Telefon ${site.phoneDisplay}`}><small>HIZLI İLETİŞİM</small><b>{site.phoneDisplay}</b></a>
    <button className="menu-button" aria-label={open ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}><span /><span /></button>
  </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobil menü">{links.map(([label, href]) => <Link aria-current={isActive(href) ? "page" : undefined} key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="btn btn-gold" href="/iletisim" onClick={() => setOpen(false)}>Teklif Al</Link><a href={site.whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp · {site.phoneDisplay}</a></nav>}</header>;
}
