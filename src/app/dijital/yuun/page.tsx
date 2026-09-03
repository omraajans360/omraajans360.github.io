import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { requireAdmin } from '@/lib/admin/auth';
import { getDigitalBrand } from '@/lib/digital-brands';
import { YuunPage } from '@/components/digital-brands/YuunPage';

export const dynamic = 'force-dynamic';
export const viewport: Viewport = { themeColor: '#310911', colorScheme: 'light' };

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getDigitalBrand('yuun');
  const title = `${brand?.qrName || 'YUUN'} | Teşekkürler`;
  const description = brand?.description || 'YUUN';
  const logo = brand?.logoSrc || '/images/digital-brands/yuun/logo-hd.webp';
  return {
    title: { absolute: title }, description, manifest: null,
    robots: { index: false, follow: true },
    icons: { icon: logo, apple: logo },
    openGraph: { title, description, url: '/dijital/yuun', type: 'website', locale: 'tr_TR', images: [{ url: logo, alt: 'YUUN' }] },
    twitter: { card: 'summary', title, description, images: [logo] },
  };
}

export default async function Page({ searchParams }: { searchParams: Promise<{ preview?: string }> }) {
  const preview = (await searchParams).preview === '1';
  if (preview) await requireAdmin();
  const brand = await getDigitalBrand('yuun', preview);
  if (!brand) notFound();
  return <YuunPage brand={brand} preview={preview}/>;
}
