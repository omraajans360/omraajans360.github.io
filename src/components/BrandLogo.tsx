import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${compact ? "compact" : ""}`} aria-label="OMRAAJANS360 Ana Sayfa">
      <Image
        src="/brand/omraajans360-transparent.png"
        alt="OMRAAJANS360 Ajans"
        width={635}
        height={125}
        priority
        className="brand-logo-image"
      />
    </Link>
  );
}
