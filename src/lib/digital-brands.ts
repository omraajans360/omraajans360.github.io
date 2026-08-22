export type DigitalBrandLink = {
  label: string;
  href?: string;
  note?: string;
  featured?: boolean;
};

export type DigitalBrand = {
  slug: string;
  name: string;
  eyebrow?: string;
  title: string;
  description: string;
  accent: string;
  accentSoft: string;
  logoSrc?: string;
  logoAlt?: string;
  links: DigitalBrandLink[];
  footerNote?: string;
  active: boolean;
};

export const digitalBrands: DigitalBrand[] = [
  {
    slug: "elosy",
    name: "ELOSY SHOES",
    eyebrow: "ELOSY SHOES",
    title: "Zarif adımlar, tek dokunuşta.",
    description: "Elosy Shoes koleksiyonuna, sosyal medya hesabına ve resmi satış kanalına tek noktadan ulaşın.",
    accent: "#c85b91",
    accentSoft: "rgba(200,91,145,.13)",
    logoSrc: "/images/digital-brands/elosy-logo.webp",
    logoAlt: "Elosy Shoes",
    links: [
      {
        label: "Trendyol Mağazasını Keşfet",
        href: "https://www.trendyol.com/magaza/elosy-shoes-m-772092?channelId=1&sst=0&sk=1",
        note: "Elosy Shoes resmi satış kanalı",
        featured: true,
      },
      {
        label: "Instagram'da Takip Et",
        href: "https://www.instagram.com/elosyshoes/",
        note: "@elosyshoes",
      },
    ],
    footerNote: "Dijital marka deneyimi OMRAAJANS360 tarafından hazırlanmıştır.",
    active: true,
  },
];

export function getDigitalBrand(slug: string) {
  return digitalBrands.find((brand) => brand.slug === slug && brand.active);
}
