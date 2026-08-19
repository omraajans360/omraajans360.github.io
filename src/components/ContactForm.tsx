"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/site";

const services = [
  "Düğün & Nişan",
  "Emlak & Gayrimenkul",
  "Mekân Tanıtımı",
  "Organizasyon",
  "Reklam & Tanıtım",
  "Arazi & Proje",
  "Drone Çekimi",
  "QR Menü",
  "Diğer",
];

export function ContactForm() {
  const params = useSearchParams();

  const initial = useMemo(
    () => params.get("hizmet") || "",
    [params]
  );

  const [service, setService] = useState(initial);
  const [status, setStatus] =
    useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  const isQr = service === "QR Menü";

  const isDrone =
    service === "Drone Çekimi" ||
    [
      "Düğün & Nişan",
      "Emlak & Gayrimenkul",
      "Mekân Tanıtımı",
      "Organizasyon",
      "Arazi & Proje",
    ].includes(service);

  const isPromo = service === "Reklam & Tanıtım";

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const r = await fetch("/api/teklif", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const j = await r.json();

      if (!r.ok) {
        throw new Error(j.error || "Gönderim başarısız");
      }

      setStatus("ok");
      setMsg(
        "Talebiniz alındı. Projenizi inceleyip en kısa sürede sizinle iletişime geçeceğiz."
      );

      form.reset();
      setService("");
    } catch {
      setStatus("error");
      setMsg(
        "Talebiniz gönderilemedi. Lütfen tekrar deneyin veya WhatsApp üzerinden bize ulaşın."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label className="hp-field" aria-hidden="true">
        Web sitesi
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      {/* 1. TEMEL İLETİŞİM */}
      <div className="field-row">
        <label>
          Ad Soyad
          <input
            name="adSoyad"
            autoComplete="name"
            placeholder="Adınız Soyadınız"
            required
            minLength={2}
          />
        </label>

        <label>
          Telefon / WhatsApp
          <input
            name="telefon"
            inputMode="tel"
            autoComplete="tel"
            placeholder="05xx xxx xx xx"
            required
            pattern="[0-9 +()-]{10,20}"
          />
        </label>
      </div>

      {/* 2. HİZMET */}
      <div className="field-row">
        <label>
          Hizmet
          <select
            name="hizmet"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Hizmet seçin</option>

            {services.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </label>

        {!isQr && (
          <label>
            Planlanan Tarih <small>(isteğe bağlı)</small>
            <input type="date" name="tarih" />
          </label>
        )}
      </div>

      {/* 3. İLETİŞİM / KONUM */}
      <div className="field-row">
        <label>
          E-posta <small>(isteğe bağlı)</small>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="ornek@email.com"
          />
        </label>

        {!isQr && (
          <label>
            {isPromo
              ? "İşletme / Marka Adı"
              : isDrone
              ? "Çekim Yeri"
              : "İşletme / Proje Konumu"}

            <input
              name="konum"
              placeholder={
                isPromo
                  ? "Marka veya işletme adı"
                  : isDrone
                  ? "Örn. Urla / Çeşme"
                  : "Varsa konum veya işletme adı"
              }
            />
          </label>
        )}
      </div>

      {/* QR MENÜ EK BİLGİLERİ */}
      {isQr && (
        <div className="qr-form-fields">
          <div className="field-row">
            <label>
              İşletme Adı
              <input
                name="isletmeAdi"
                placeholder="İşletmenizin adı"
              />
            </label>

            <label>
              İşletme Türü
              <input
                name="isletmeTuru"
                placeholder="Restoran, kafe, otel..."
              />
            </label>
          </div>

          <label>
            Yaklaşık Ürün Sayısı
            <input
              name="urunSayisi"
              inputMode="numeric"
              placeholder="Örn. 60"
            />
          </label>
        </div>
      )}

      {/* PROJE AÇIKLAMASI */}
      <label className="message-field">
        Proje Hakkında
        <textarea
          name="mesaj"
          rows={7}
          placeholder="İhtiyacınızı, kullanım amacınızı ve varsa özel taleplerinizi kısaca anlatın."
          required
          minLength={10}
        />
      </label>

      {/* KVKK */}
      <label className="consent">
        <input
          type="checkbox"
          name="kvkk"
          value="on"
          required
        />

        <span>
          İletişim talebimin yanıtlanması için bilgilerimin işlenmesine
          ilişkin{" "}
          <a href="/kvkk" target="_blank">
            KVKK Aydınlatma Metni'ni
          </a>{" "}
          okudum.
        </span>
      </label>

      {/* BUTONLAR */}
      <div className="form-actions">
        <button
          className="btn btn-gold"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending"
            ? "GÖNDERİLİYOR..."
            : "TEKLİF İSTE"}{" "}
          <span>→</span>
        </button>

        <a
          className="btn btn-dark"
          target="_blank"
          rel="noreferrer"
          href={site.whatsappUrl(
            service
              ? `Merhaba OMRAAJANS360, ${service} hizmeti için teklif almak istiyorum.`
              : "Merhaba OMRAAJANS360, özel teklif almak istiyorum."
          )}
        >
          WHATSAPP'TAN YAZ
        </a>
      </div>

      {msg && (
        <p className={`form-status ${status}`}>
          {msg}
        </p>
      )}

      <small className="form-note">
        Talebinizi inceledikten sonra en kısa sürede sizinle iletişime geçiyoruz.
      </small>
    </form>
  );
}