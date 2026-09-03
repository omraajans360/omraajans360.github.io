import Link from 'next/link';
import { addYuunChannelAction, createYuunDraftAction } from '@/lib/admin/yuun-actions';
import { YUUN_CHANNELS } from '@/lib/yuun';

export function YuunDraftCard({ existingId }: { existingId?: string }) {
  return <section className="admin-card">
    <h2>YUUN · Teşekkür ve değerlendirme sayfası</h2>
    <p className="admin-note">Bordo, altın ve krem tasarım; logo ve teşekkür metinleri hazır. Firma bağlantılarını daha sonra ekleyebilirsiniz.</p>
    {existingId ? <Link href={`/admin/dijital-markalar/${existingId}`} className="admin-btn">YUUN’u Düzenle</Link>
      : <form action={createYuunDraftAction}><button className="admin-btn">YUUN Taslağını Oluştur</button></form>}
  </section>;
}

export function YuunChannelSetup({ id, icons }: { id: string; icons: (string | null)[] }) {
  return <section className="admin-card">
    <h2>YUUN bağlantılarını tamamla</h2>
    <p className="admin-note">Bağlantısı olmayan alanlar ziyaretçilere gösterilmez. Eklediğiniz kanallar aşağıdaki Bağlantılar bölümünden düzenlenebilir veya kapatılabilir. Değerlendirme simgesini “review” olarak koruyun.</p>
    <p className="admin-note">Ana renk bordo alanları, yumuşak renk altın detayları belirler (örnek: #b99a65). Kapak fotoğrafı temsili bir marka görselidir.</p>
    {YUUN_CHANNELS.filter(channel => !icons.includes(channel.icon)).map(channel => <form key={channel.icon} action={addYuunChannelAction} className="admin-form" style={{ marginTop: 20 }}>
      <input type="hidden" name="page_id" value={id}/><input type="hidden" name="icon" value={channel.icon}/>
      <label>{channel.label}<input name="href" type="url" placeholder={channel.icon === 'whatsapp' ? 'https://wa.me/90…' : 'https://…'} required pattern="https://.*"/></label>
      <div className="admin-actions"><button className="admin-btn admin-btn-secondary">Bağlantıyı Ekle</button></div>
    </form>)}
  </section>;
}
