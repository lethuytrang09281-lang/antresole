import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="site-footer__brand">Antresole</Link>
      <p>Design & architecture studio</p>
      <a href="#top">Наверх ↑</a>
    </footer>
  );
}
