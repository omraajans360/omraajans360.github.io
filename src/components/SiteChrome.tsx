'use client';
import{usePathname}from'next/navigation';import{Header}from'@/components/Header';import{Footer}from'@/components/Footer';import{FloatingContact}from'@/components/FloatingContact';
export function SiteChrome({children}:{children:React.ReactNode}){const pathname=usePathname(),isolated=pathname.startsWith('/admin')||pathname.startsWith('/menu/')||pathname.startsWith('/dijital/');if(isolated)return <>{children}</>;return <><Header/>{children}<Footer/><FloatingContact/></>}
