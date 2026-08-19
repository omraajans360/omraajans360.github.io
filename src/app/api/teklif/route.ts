import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";
export const runtime="nodejs";
function clean(v:unknown,max=2000){return String(v??"").replace(/[<>]/g,"").trim().slice(0,max)}
export async function POST(req:Request){
 try{const b=await req.json(); if(b.website) return NextResponse.json({ok:true}); const ad=clean(b.adSoyad,120), tel=clean(b.telefon,80), email=clean(b.email,180), hizmet=clean(b.hizmet,120), konum=clean(b.konum,240), isletmeAdi=clean(b.isletmeAdi,180), isletmeTuru=clean(b.isletmeTuru,120), urunSayisi=clean(b.urunSayisi,40), tarih=clean(b.tarih,60), mesaj=clean(b.mesaj,4000), kvkk=clean(b.kvkk,20);
 if(ad.length<2||tel.length<10||mesaj.length<10||kvkk!=="on") return NextResponse.json({error:"Zorunlu alanları kontrol edin."},{status:400});
 const user=process.env.OMRA_GMAIL_USER||site.email; const pass=process.env.OMRA_GMAIL_APP_PASSWORD; if(!pass) return NextResponse.json({error:"E-posta servisi henüz yapılandırılmadı."},{status:503});
 const transporter=nodemailer.createTransport({service:"gmail",auth:{user,pass}});
 await transporter.sendMail({from:`OMRAAJANS360 Web <${user}>`,to:site.email,replyTo:email||undefined,subject:`Yeni Teklif Talebi${hizmet?` — ${hizmet}`:""}`,text:`Ad Soyad: ${ad}\nTelefon/WhatsApp: ${tel}\nE-posta: ${email||"Belirtilmedi"}\nHizmet: ${hizmet||"Belirtilmedi"}\nKonum: ${konum||"Belirtilmedi"}\nİşletme Adı: ${isletmeAdi||"Belirtilmedi"}\nİşletme Türü: ${isletmeTuru||"Belirtilmedi"}\nYaklaşık Ürün Sayısı: ${urunSayisi||"Belirtilmedi"}\nTarih: ${tarih||"Belirtilmedi"}\n\nProje:\n${mesaj}\n\nKVKK onayı: Evet\nKaynak: omraajans360.com`});
 return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"Gönderim sırasında bir hata oluştu."},{status:500})}
}
