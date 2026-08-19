export const site = {
  name: "OMRAAJANS360",
  domain: "https://www.omraajans360.com",
  email: "omraajans360@gmail.com",
  phoneDisplay: "0552 922 62 04",
  phoneE164: "+905529226204",
  whatsapp: "905529226204",
  instagramHandle: "@omraajans360",
  instagramUrl: "https://www.instagram.com/omraajans360/",
  whatsappUrl(message = "Merhaba OMRAAJANS360, hizmetleriniz hakkında bilgi ve teklif almak istiyorum.") {
    return `https://wa.me/905529226204?text=${encodeURIComponent(message)}`;
  },
};
