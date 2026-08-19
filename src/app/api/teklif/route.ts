import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Düğün & Nişan",
  "Emlak & Gayrimenkul",
  "Mekân Tanıtımı",
  "Organizasyon",
  "Reklam & Tanıtım",
  "Arazi & Proje",
  "Drone Çekimi",
  "QR Menü",
  "Diğer",
]);

function clean(v: unknown, max = 2000) {
  return String(v ?? "").replace(/[<>]/g, "").trim().slice(0, max);
}

function bad(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status, headers: { "Cache-Control": "no-store" } });
}

function originAllowed(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    const host = new URL(origin).hostname.toLowerCase();
    return host === "www.omraajans360.com" || host === "omraajans360.com" || host.endsWith(".vercel.app") || host === "localhost";
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    if (!originAllowed(req)) return bad("İstek kaynağı doğrulanamadı.", 403);
    if (!req.headers.get("content-type")?.includes("application/json")) return bad("Geçersiz istek.", 415);

    const b = await req.json();
    if (b.website) return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });

    const ad = clean(b.adSoyad, 120);
    const tel = clean(b.telefon, 80);
    const email = clean(b.email, 180);
    const hizmet = clean(b.hizmet, 120);
    const konum = clean(b.konum, 240);
    const isletmeAdi = clean(b.isletmeAdi, 180);
    const isletmeTuru = clean(b.isletmeTuru, 120);
    const urunSayisi = clean(b.urunSayisi, 40);
    const tarih = clean(b.tarih, 60);
    const mesaj = clean(b.mesaj, 4000);
    const kvkk = clean(b.kvkk, 20);

    if (ad.length < 2 || tel.replace(/\D/g, "").length < 10 || mesaj.length < 10 || kvkk !== "on") return bad("Zorunlu alanları kontrol edin.");
    if (!allowedServices.has(hizmet)) return bad("Lütfen geçerli bir hizmet seçin.");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("E-posta adresini kontrol edin.");

    const user = process.env.OMRA_GMAIL_USER || site.email;
    const pass = process.env.OMRA_GMAIL_APP_PASSWORD;
    if (!pass) return bad("E-posta servisi henüz yapılandırılmadı.", 503);

    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
    await transporter.sendMail({
      from: `OMRAAJANS360 Web <${user}>`,
      to: site.email,
      replyTo: email || undefined,
      subject: `Yeni Teklif Talebi — ${hizmet}`,
      text: `OMRAAJANS360 YENİ TEKLİF TALEBİ\n\nAd Soyad: ${ad}\nTelefon/WhatsApp: ${tel}\nE-posta: ${email || "Belirtilmedi"}\nHizmet: ${hizmet}\nKonum: ${konum || "Belirtilmedi"}\nİşletme Adı: ${isletmeAdi || "Belirtilmedi"}\nİşletme Türü: ${isletmeTuru || "Belirtilmedi"}\nYaklaşık Ürün Sayısı: ${urunSayisi || "Belirtilmedi"}\nTarih: ${tarih || "Belirtilmedi"}\n\nPROJE DETAYI\n${mesaj}\n\nKVKK bilgilendirmesi: Okundu\nKaynak: www.omraajans360.com`,
    });

    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return bad("Gönderim sırasında bir hata oluştu.", 500);
  }
}
