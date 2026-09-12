import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__wordmark" aria-hidden="true">ANTRESOLE</div>
      <Link href="/" className="site-footer__brand">Design & architecture studio</Link>
      <p>Портфолио / 2026</p>
      <a href="#top">Наверх <ArrowIcon direction="up" /></a>
    </footer>
  );
}
