import{select}from'@/lib/admin/db';

export type DigitalBrandLink={id:string;label:string;href:string;note:string|null;icon:string|null;featured:boolean;active:boolean;sortOrder:number};
export type DigitalBrand={id:string;slug:string;name:string;eyebrow:string|null;title:string;description:string;accent:string;accentSoft:string;logoSrc:string|null;footerNote:string|null;qrName:string;status:'taslak'|'yayinda'|'pasif';active:boolean;links:DigitalBrandLink[]};

type BrandRow={id:string;slug:string;name:string;eyebrow:string|null;title:string;description:string;accent:string;accent_soft:string;logo_url:string|null;footer_note:string|null;qr_name:string;status:'taslak'|'yayinda'|'pasif'};
type LinkRow={id:string;page_id:string;label:string;href:string;note:string|null;icon:string|null;featured:boolean;active:boolean;sort_order:number};

function mapBrand(row:BrandRow,links:LinkRow[]):DigitalBrand{return{id:row.id,slug:row.slug,name:row.name,eyebrow:row.eyebrow,title:row.title,description:row.description,accent:row.accent,accentSoft:row.accent_soft,logoSrc:row.logo_url,footerNote:row.footer_note,qrName:row.qr_name,status:row.status,active:row.status==='yayinda',links:links.filter(l=>l.page_id===row.id&&l.active).sort((a,b)=>a.sort_order-b.sort_order).map(l=>({id:l.id,label:l.label,href:l.href,note:l.note,icon:l.icon,featured:l.featured,active:l.active,sortOrder:l.sort_order}))}}

export async function listDigitalBrands(includeInactive=false){const q=includeInactive?'select=*&order=created_at.desc':'status=eq.yayinda&select=*&order=created_at.desc';const rows=await select<BrandRow>('digital_brand_pages',q);if(!rows.length)return[];const links=await select<LinkRow>('digital_brand_links','select=*&order=sort_order.asc,created_at.asc');return rows.map(r=>mapBrand(r,links))}

export async function getDigitalBrand(slug:string,includeInactive=false){const normalized=slug==='eloshy'?'elosy':slug;const status=includeInactive?'':`&status=eq.yayinda`;const rows=await select<BrandRow>('digital_brand_pages',`slug=eq.${encodeURIComponent(normalized)}${status}&select=*&limit=1`);const row=rows[0];if(!row)return null;const links=await select<LinkRow>('digital_brand_links',`page_id=eq.${encodeURIComponent(row.id)}&select=*&order=sort_order.asc,created_at.asc`);return mapBrand(row,links)}
