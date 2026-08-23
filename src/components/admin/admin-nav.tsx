'use client';
import Link from'next/link';import{usePathname}from'next/navigation';
type Item={label:string;href:string;mark:string};
const groups:{label:string;items:Item[]}[]=[
{label:'OPERASYON',items:[{label:'Genel Bakış',href:'/admin',mark:'01'},{label:'Ajanda',href:'/admin/agenda',mark:'02'},{label:'Teklifler',href:'/admin/teklif',mark:'03'},{label:'İş Takibi',href:'/admin/isler',mark:'04'}]},
{label:'MÜŞTERİ & FİNANS',items:[{label:'Müşteriler',href:'/admin/musteriler',mark:'05'},{label:'Finans',href:'/admin/finans',mark:'06'}]},
{label:'DİJİTAL ÜRÜNLER',items:[{label:'QR Menü',href:'/admin/qr-menu',mark:'07'},{label:'Dijital Markalar',href:'/admin/dijital-markalar',mark:'08'}]},
{label:'SİSTEM',items:[{label:'Ayarlar',href:'/admin/ayarlar',mark:'09'}]},
];
export function AdminNav(){const pathname=usePathname();return <nav className="admin-nav" aria-label="Yönetim menüsü">{groups.map(group=><div className="admin-nav-group" key={group.label}><div className="admin-nav-label">{group.label}</div>{group.items.map(item=>{const active=item.href==='/admin'?pathname==='/admin':pathname===item.href||pathname.startsWith(`${item.href}/`);return <Link key={item.href} href={item.href} className={active?'admin-nav-link active':'admin-nav-link'}><span className="admin-nav-mark">{item.mark}</span><span>{item.label}</span>{active&&<i aria-hidden="true"/>}</Link>})}</div>)}</nav>}
