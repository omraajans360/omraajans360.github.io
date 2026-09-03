'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { requireAdmin } from './auth';
import { insert, select } from './db';
import { safeBrandHref, YUUN_CHANNELS, YUUN_DEFAULTS } from '@/lib/yuun';

export async function createYuunDraftAction() {
  await requireAdmin();
  const existing = await select<{ id: string }>('digital_brand_pages', 'slug=eq.yuun&select=id&limit=1');
  if (existing[0]) redirect(`/admin/dijital-markalar/${existing[0].id}`);
  // A draft has no invented contact details or links and is never public by default.
  const brand = await insert<{ id: string }>('digital_brand_pages', YUUN_DEFAULTS);
  revalidatePath('/admin/dijital-markalar');
  redirect(`/admin/dijital-markalar/${brand.id}`);
}

export async function addYuunChannelAction(form: FormData) {
  await requireAdmin();
  const id = String(form.get('page_id') || '');
  const channel = YUUN_CHANNELS.find(item => item.icon === form.get('icon'));
  const href = safeBrandHref(String(form.get('href') || '').trim());
  if (!id || !channel || !href) throw new Error('Geçerli bir https:// bağlantısı girin.');
  const brand = (await select<{ id: string }>('digital_brand_pages', `id=eq.${encodeURIComponent(id)}&slug=eq.yuun&select=id&limit=1`))[0];
  if (!brand) throw new Error('YUUN marka sayfası bulunamadı.');
  const links = await select<{ id: string }>('digital_brand_links', `page_id=eq.${encodeURIComponent(id)}&icon=eq.${channel.icon}&select=id&limit=1`);
  if (links.length) throw new Error('Bu kanal zaten var. Aşağıdaki Bağlantılar bölümünden düzenleyin.');
  await insert('digital_brand_links', {
    page_id: id, icon: channel.icon, label: channel.label, note: channel.note,
    href, active: true, featured: channel.icon === 'review', sort_order: channel.order,
  });
  revalidatePath(`/admin/dijital-markalar/${id}`);
  revalidatePath('/dijital/yuun');
}
