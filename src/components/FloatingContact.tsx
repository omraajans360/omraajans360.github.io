import { site } from "@/lib/site";

function WhatsAppIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a9.7 9.7 0 0 0-8.3 14.7L2.4 21.6l5-1.3A9.7 9.7 0 1 0 12 2Zm0 17.6c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A7.7 7.7 0 1 1 12 19.6Zm4.2-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5.3-.5c.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .2-1.1-.1-.1-.3-.2-.5-.3Z"/></svg>}
function InstagramIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.4 2h9.2A5.4 5.4 0 0 1 22 7.4v9.2a5.4 5.4 0 0 1-5.4 5.4H7.4A5.4 5.4 0 0 1 2 16.6V7.4A5.4 5.4 0 0 1 7.4 2Zm0 2A3.4 3.4 0 0 0 4 7.4v9.2A3.4 3.4 0 0 0 7.4 20h9.2a3.4 3.4 0 0 0 3.4-3.4V7.4A3.4 3.4 0 0 0 16.6 4H7.4Zm9.6 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>}

export function FloatingContact(){return <div className="floating-contact">
  <a className="float-wa" href={site.whatsappUrl("Merhaba OMRAAJANS360, web sitenizden ulaşıyorum. Hizmetleriniz hakkında bilgi ve özel teklif almak istiyorum.")} target="_blank" rel="noreferrer" aria-label="WhatsApp'tan özel teklif alın"><span><WhatsAppIcon/></span><b>WhatsApp</b></a>
  <a className="float-ig" href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="OMRAAJANS360 Instagram hesabı"><InstagramIcon/></a>
 </div>}
