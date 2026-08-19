'use client';
import{usePathname}from'next/navigation';import{Header}from'@/components/Header';import{Footer}from'@/components/Footer';import{FloatingContact}from'@/components/FloatingContact';
export function SiteChrome(){const pathname=usePathname(),isolated=pathname.startsWith('/admin')||pathname.startsWith('/menu/');if(isolated)return null;return <><Header/><FloatingContact/><Footer/></>}
