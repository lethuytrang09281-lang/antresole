import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Antresole, на главную">
        <Image
          src="/images/antresole-logo.webp"
          alt="Antresole — design & architecture studio"
          width="1400"
          height="376"
          sizes="(max-width: 820px) 192px, 288px"
        />
      </Link>
      <nav aria-label="Основная навигация">
        <Link href="/#projects">Проекты</Link>
        <Link href="/#studio">Студия</Link>
      </nav>
    </header>
  );
}
