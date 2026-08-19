import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://omraajans360.com";return ["","/drone-cekimi","/qr-menu","/hakkimizda","/iletisim","/gizlilik","/kvkk","/cerez-politikasi"].map((path)=>({url:base+path,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.8}))}
