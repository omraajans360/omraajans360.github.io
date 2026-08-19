export type ServicePageData = {
  slug: string;
  serviceName: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  introTitle: string;
  introText: string;
  benefits: [string, string][];
  useCases: [string, string][];
  faq: [string, string][];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "dugun-nisan-drone-cekimi",
    serviceName: "Düğün & Nişan",
    seoTitle: "İzmir Düğün & Nişan Drone Çekimi",
    seoDescription: "İzmir, Çeşme, Urla ve çevresinde düğün ve nişan organizasyonları için projeye özel profesyonel drone çekimi ve kurgu hizmeti.",
    eyebrow: "DÜĞÜN & NİŞAN · İZMİR & ÇEVRESİ",
    title: "En Özel Gününüzü",
    accent: "Yukarıdan",
    description: "Mekânı, atmosferi ve günün duygusunu bir araya getiren sinematik hava görüntüleriyle hikâyenizi daha güçlü anlatıyoruz.",
    image: "/images/premium/service-wedding-premium.webp",
    introTitle: "Anı Değil, Hikâyeyi Görüntülüyoruz.",
    introText: "Çekimi yalnızca havadan görüntü almak olarak görmüyoruz. Mekân, ışık, program akışı ve kullanılacak platform birlikte değerlendirilir; çekim planı buna göre hazırlanır.",
    benefits: [
      ["Mekâna Özel Planlama", "Uçuş noktaları ve çekim akışı mekâna göre önceden planlanır."],
      ["Sinematik Görüntü", "Geniş planlar ve akıcı hareketlerle güçlü bir atmosfer oluşturulur."],
      ["Sosyal Medya Uyumlu", "Dikey ve yatay kullanım ihtiyaçları proje başında belirlenir."],
      ["Kurgu & Renk", "Seçilen görüntüler ritim, renk ve kullanım amacına göre düzenlenir."],
    ],
    useCases: [
      ["Düğün Filmi", "Ana düğün videosunu güçlendiren hava görüntüleri."],
      ["Reels & Kısa Video", "Instagram ve sosyal medya için dikkat çekici kısa içerikler."],
      ["Mekân Tanıtımı", "Organizasyon mekânının konumunu ve atmosferini gösteren planlar."],
      ["Save the Date", "Özel tarih duyurularına uygun yaratıcı çekim seçenekleri."],
    ],
    faq: [
      ["Düğün günü drone uçuşu her zaman yapılabilir mi?", "Uçuş; hava koşulları, lokasyon ve ilgili uçuş kısıtlarına göre değerlendirilir."],
      ["Çekim ne kadar sürer?", "Program ve istenen görüntü kapsamına göre teklif aşamasında netleştirilir."],
      ["Sadece drone çekimi alabilir miyiz?", "Evet. Proje yalnızca hava çekimi veya kurgu dahil paket olarak planlanabilir."],
      ["Hangi bölgelerde hizmet veriyorsunuz?", "Ana hizmet bölgemiz İzmir ve çevresidir; farklı lokasyonlar proje bazında değerlendirilir."],
    ],
  },
  {
    slug: "emlak-drone-cekimi",
    serviceName: "Emlak & Gayrimenkul",
    seoTitle: "İzmir Emlak & Gayrimenkul Drone Çekimi",
    seoDescription: "Villa, konut, arsa ve gayrimenkul projeleri için İzmir ve çevresinde profesyonel drone çekimi ve tanıtım içerikleri.",
    eyebrow: "EMLAK & GAYRİMENKUL · İZMİR",
    title: "Gayrimenkulü",
    accent: "Konumuyla",
    description: "Villa, konut, arsa ve projeleri yalnızca yapı olarak değil; çevresi, ölçeği ve konum avantajlarıyla birlikte gösteriyoruz.",
    image: "/images/premium/service-realestate-premium.webp",
    introTitle: "İlanın Ötesinde Bir Sunum.",
    introText: "Doğru hava görüntüsü, gayrimenkulün çevresini ve ölçeğini tek karede anlatabilir. Çekim planını satış, kiralama veya proje tanıtımı amacına göre oluşturuyoruz.",
    benefits: [
      ["Konum Vurgusu", "Çevre, ulaşım ve yakınlık avantajları güçlü açılarla gösterilir."],
      ["Ölçek Algısı", "Arsa ve projelerde büyüklüğü anlaşılır hale getiren planlar üretilir."],
      ["İlan Uyumlu", "Emlak portalları, web ve sosyal medya için kullanılabilir içerikler hazırlanır."],
      ["Kurumsal Sunum", "Proje ve yatırım sunumlarında kullanılabilecek düzenli görsel set oluşturulur."],
    ],
    useCases: [
      ["Villa & Konut", "Mülkün mimarisi ve çevresini birlikte gösteren çekimler."],
      ["Arsa", "Sınır, çevre ve konumu anlatmayı kolaylaştıran genel planlar."],
      ["Proje Lansmanı", "Yeni konut ve ticari projeler için tanıtım görüntüleri."],
      ["Sosyal Medya", "Portföyü öne çıkaran kısa video ve Reels içerikleri."],
    ],
    faq: [
      ["Tek bir mülk için çekim yapıyor musunuz?", "Evet. Tek portföy veya çoklu portföy için proje bazında planlama yapılabilir."],
      ["Arsa sınırları görüntü üzerinde gösterilebilir mi?", "İhtiyaca göre kurgu aşamasında ek görsel işaretlemeler ayrıca değerlendirilebilir."],
      ["Fotoğraf da teslim ediliyor mu?", "İstenen teslim kapsamı teklif aşamasında netleştirilir."],
      ["Çekim için mülkte bulunmam gerekir mi?", "Lokasyon ve erişim koşullarına göre süreç önceden planlanabilir."],
    ],
  },
  {
    slug: "mekan-tanitim-drone-cekimi",
    serviceName: "Mekân Tanıtımı",
    seoTitle: "İzmir Mekân & İşletme Drone Çekimi",
    seoDescription: "Otel, restoran, kafe, beach club ve işletmeler için İzmir ve çevresinde profesyonel drone ve tanıtım çekimi.",
    eyebrow: "MEKÂN & İŞLETME TANITIMI",
    title: "Mekânınızın",
    accent: "Atmosferini",
    description: "Otel, restoran, kafe ve işletmelerin konumunu, mimarisini ve deneyimini etkileyici hava görüntüleriyle anlatıyoruz.",
    image: "/images/premium/service-venue-premium.webp",
    introTitle: "İlk İzlenimi Güçlendirin.",
    introText: "Mekân tanıtımında yalnızca bina değil; çevre, giriş, açık alanlar ve genel atmosfer birlikte ele alınır. İçeriği web sitesi, sosyal medya ve reklam kullanımına göre planlıyoruz.",
    benefits: [
      ["Markaya Uygun Görsel Dil", "Çekim yaklaşımı işletmenin konumlandırmasına göre belirlenir."],
      ["Mekânı Bütün Gösteren Açılar", "Mimari, çevre ve açık alanlar tek anlatıda birleştirilir."],
      ["Çoklu Kullanım", "Aynı üretim web, sosyal medya ve reklam için değerlendirilebilir."],
      ["Planlı Çekim Saati", "Işık ve işletme yoğunluğu dikkate alınarak uygun zaman seçilir."],
    ],
    useCases: [
      ["Restoran & Kafe", "Konum, bahçe, teras ve atmosferi anlatan görüntüler."],
      ["Otel & Konaklama", "Tesis ölçeği ve çevresini gösteren tanıtım içerikleri."],
      ["Beach & Etkinlik Mekânı", "Alan deneyimini ve lokasyonu güçlendiren hava planları."],
      ["Kurumsal Web", "Ana sayfa ve tanıtım bölümlerinde kullanılabilecek görüntüler."],
    ],
    faq: [
      ["İşletme açıkken çekim yapılabilir mi?", "Yoğunluk ve güvenlik koşullarına göre çekim saati birlikte planlanır."],
      ["Sosyal medya için dikey video hazırlanabilir mi?", "Evet. Kullanım amacı baştan belirtilirse içerik buna göre planlanabilir."],
      ["İç mekân çekimi de dahil mi?", "Proje kapsamına göre ayrıca planlanabilir."],
      ["Çekim öncesi keşif gerekiyor mu?", "Projeye göre fiziksel veya dijital ön değerlendirme yapılabilir."],
    ],
  },
  {
    slug: "organizasyon-drone-cekimi",
    serviceName: "Organizasyon",
    seoTitle: "İzmir Organizasyon & Etkinlik Drone Çekimi",
    seoDescription: "Açılış, etkinlik, festival ve özel organizasyonlar için İzmir ve çevresinde profesyonel drone çekimi ve video içeriği.",
    eyebrow: "ORGANİZASYON & ETKİNLİK",
    title: "Etkinliği",
    accent: "Bütünüyle",
    description: "Kalabalığı, alanı ve organizasyonun ölçeğini güçlü genel planlarla gösteren profesyonel hava çekimleri üretiyoruz.",
    image: "/images/premium/service-event-premium.webp",
    introTitle: "Atmosferi Tek Kadraja Sığdırın.",
    introText: "Etkinliklerde zamanlama kritiktir. Program akışındaki önemli anları belirleyerek uçuşları buna göre planlıyor, kullanılabilir görüntü çeşitliliğini artırıyoruz.",
    benefits: [
      ["Program Odaklı Plan", "Önemli anlar ve yoğunluk saatleri çekim öncesinde belirlenir."],
      ["Güçlü Genel Planlar", "Etkinliğin alanı ve katılım ölçeği etkili biçimde gösterilir."],
      ["Hızlı İçerik Kullanımı", "Sosyal medya ve etkinlik sonrası iletişim için uygun içerikler hazırlanabilir."],
      ["Marka Görünürlüğü", "Sahne, alan ve marka uygulamalarını destekleyen açılar planlanır."],
    ],
    useCases: [
      ["Açılış", "Yeni mekân ve işletme açılışlarının genel görüntüleri."],
      ["Festival & Konser", "Alan ve katılım yoğunluğunu gösteren geniş planlar."],
      ["Kurumsal Etkinlik", "Marka iletişiminde kullanılabilecek düzenli içerik setleri."],
      ["Özel Organizasyon", "Projeye özel program ve lokasyon bazlı hava çekimleri."],
    ],
    faq: [
      ["Kalabalık etkinliklerde drone kullanılabilir mi?", "Uçuş güvenliği ve mevzuat koşulları lokasyona göre değerlendirilir; plan buna göre oluşturulur."],
      ["Aynı gün kısa video teslimi mümkün mü?", "Hızlı teslim ihtiyacı proje başlangıcında belirtilirse ayrıca planlanabilir."],
      ["Etkinliğin tamamında çekim yapılır mı?", "Uçuş süreleri ve gerekli anlar etkinlik programına göre planlanır."],
      ["Şehir dışı organizasyon kabul ediyor musunuz?", "İzmir dışındaki projeler kapsam ve lokasyona göre değerlendirilir."],
    ],
  },
  {
    slug: "reklam-tanitim-drone-cekimi",
    serviceName: "Reklam & Tanıtım",
    seoTitle: "İzmir Reklam & Tanıtım Drone Çekimi",
    seoDescription: "Marka, ürün, işletme ve projeler için İzmir merkezli profesyonel drone çekimi, reklam ve tanıtım içerikleri.",
    eyebrow: "REKLAM & TANITIM İÇERİĞİ",
    title: "Markanızı",
    accent: "Daha Güçlü",
    description: "Sosyal medya, web ve dijital reklam kullanımına uygun; markanın görsel diline göre planlanan profesyonel tanıtım görüntüleri üretiyoruz.",
    image: "/images/premium/service-advert-premium.webp",
    introTitle: "İçeriği Kullanım Amacına Göre Üretiyoruz.",
    introText: "Reklam içeriğinde çekim kadar format ve mesaj da önemlidir. Kullanılacak platformu, hedef görüntüleri ve teslim formatlarını üretim öncesinde netleştiriyoruz.",
    benefits: [
      ["Kampanya Odaklı", "Çekim planı kampanyanın mesajı ve kullanım alanına göre hazırlanır."],
      ["Dikey & Yatay Format", "Sosyal medya ve web ihtiyaçları birlikte planlanabilir."],
      ["Kurguya Uygun Çeşitlilik", "Montajda seçenek yaratacak farklı hareket ve genel planlar üretilir."],
      ["Marka Tutarlılığı", "Görsel yaklaşım markanın mevcut diliyle uyumlu tutulur."],
    ],
    useCases: [
      ["Sosyal Medya Reklamı", "Reels, kısa video ve kampanya içerikleri."],
      ["Web Sitesi", "Hero, tanıtım ve proje sayfalarında kullanılabilecek görüntüler."],
      ["Kurumsal Film", "Ana tanıtım filmine destek veren hava planları."],
      ["Lansman", "Yeni ürün, proje veya mekân duyurularını güçlendiren içerikler."],
    ],
    faq: [
      ["Sadece ham görüntü alabilir miyiz?", "Teslim kapsamı proje bazında belirlenir; ham görüntü seçeneği ayrıca değerlendirilebilir."],
      ["Reklam için farklı boyutlarda çıktı hazırlanabilir mi?", "Kullanılacak mecralar baştan belirlenirse teslim formatları buna göre planlanabilir."],
      ["Kurgu hizmeti veriyor musunuz?", "Evet. Proje ihtiyacına göre çekim ve kurgu birlikte planlanabilir."],
      ["Marka brief'i ile çalışıyor musunuz?", "Evet. Mevcut brief, moodboard veya marka yönergeleri üretim planına dahil edilebilir."],
    ],
  },
  {
    slug: "arazi-proje-drone-cekimi",
    serviceName: "Arazi & Proje",
    seoTitle: "İzmir Arazi & Proje Drone Çekimi",
    seoDescription: "Arazi, şantiye ve proje sahaları için İzmir ve çevresinde profesyonel drone görüntüleme ve tanıtım çekimi.",
    eyebrow: "ARAZİ & PROJE ÇEKİMLERİ",
    title: "Projeyi",
    accent: "Bütünüyle",
    description: "Arazi, şantiye ve proje alanlarını ölçek, çevre ve ilerleme görünürlüğü sağlayan düzenli hava görüntüleriyle belgeliyoruz.",
    image: "/images/premium/service-project-premium.webp",
    introTitle: "Geniş Alanları Daha Anlaşılır Gösterin.",
    introText: "Hava görüntüleri; geniş proje sahalarını tek bakışta anlatmak, ilerlemeyi göstermek ve sunumları güçlendirmek için etkili bir araçtır. Çekim kapsamını ihtiyaca göre planlıyoruz.",
    benefits: [
      ["Geniş Alan Görünümü", "Saha ve çevresi tek anlatıda daha anlaşılır hale gelir."],
      ["Düzenli Çekim Planı", "İhtiyaca göre dönemsel tekrar çekimleri planlanabilir."],
      ["Sunum Uyumlu", "Yatırımcı, müşteri veya kurum sunumlarında kullanılabilecek içerikler hazırlanır."],
      ["Konum & Çevre", "Projenin çevre bağlantıları ve genel yerleşimi gösterilebilir."],
    ],
    useCases: [
      ["Şantiye İlerlemesi", "Belirli dönemlerde ilerlemeyi görsel olarak takip etmeye uygun çekimler."],
      ["Arazi Sunumu", "Alan büyüklüğü ve çevresini gösteren genel hava görüntüleri."],
      ["Proje Tanıtımı", "Web, sunum ve sosyal medya için kullanılabilecek içerikler."],
      ["Kurumsal Arşiv", "Proje sürecini görsel olarak belgelemeye yardımcı içerik setleri."],
    ],
    faq: [
      ["Düzenli periyotlarla çekim yapılabilir mi?", "Evet. Projeye göre haftalık, aylık veya kilometre taşı bazlı plan oluşturulabilir."],
      ["Teknik ölçüm hizmeti veriyor musunuz?", "Bu hizmet sayfası görsel çekim ve tanıtım içeriği içindir; teknik haritalama/ölçüm ayrıca kapsamlandırılmalıdır."],
      ["Büyük araziler için çekim yapılabilir mi?", "Lokasyon ve uçuş koşulları değerlendirildikten sonra uygun plan oluşturulur."],
      ["Görüntüler sunumlarda kullanılabilir mi?", "Evet. Teslim formatları kullanım amacına göre belirlenebilir."],
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((item) => item.slug === slug);
}
