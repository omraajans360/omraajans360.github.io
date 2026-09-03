export const YUUN_DEFAULTS = {
  name: 'YUUN', slug: 'yuun', eyebrow: 'SİZİN İÇİN HAZIRLANDI',
  title: 'Güzel adımlarda buluşalım.',
  description: 'Siparişiniz için teşekkür ederiz.\nYUUN’u tercih ettiğiniz için mutluyuz.',
  accent: '#310911', accent_soft: '#b99a65',
  logo_url: '/images/digital-brands/yuun/logo-hd.webp',
  footer_note: 'Her adımınızda yanınızdayız.', qr_name: 'YUUN', status: 'taslak',
} as const;

export const YUUN_CHANNELS = [
  { icon: 'review', label: 'Siparişimi Değerlendir', note: 'Yorumunuz, yeni adımlara ilham olsun.', order: 0 },
  { icon: 'web', label: 'Web Sitemiz', note: 'Koleksiyonumuzu keşfedin', order: 10 },
  { icon: 'trendyol', label: 'Trendyol Mağazamız', note: 'Favori modelinizi bulun', order: 20 },
  { icon: 'instagram', label: 'Instagram', note: 'Yeni koleksiyonlar ve stil ilhamı', order: 30 },
  { icon: 'whatsapp', label: 'WhatsApp Destek', note: 'Size yardımcı olmak için buradayız', order: 40 },
] as const;

// Only external HTTPS destinations are used on this brand landing page.
export function safeBrandHref(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
