import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Antresole — design & architecture studio",
  description: "Архитектура интерьера от планировочной логики до деталей пространства.",
};

export default function Home() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main>
        <section className="home-cover" aria-labelledby="home-title">
          <div className="home-cover__title">
            <h1 id="home-title">Балтийский 99</h1>
            <p>Жилой интерьер · 99 м² · 2022</p>
          </div>

          <Link
            className="home-cover__image image-link"
            href="/project/baltiyskiy-99"
            aria-label="Открыть проект Балтийский 99"
          >
            <Image
              src="/images/baltiyskiy/living-hero.webp"
              alt="Визуализация светлой гостиной, объединённой с кухней"
              width="2200"
              height="1238"
              sizes="(max-width: 820px) 100vw, 75vw"
              loading="eager"
              fetchPriority="high"
            />
            <span>Смотреть проект</span>
          </Link>

          <p className="home-cover__index" aria-hidden="true">A—01</p>
        </section>

        <section className="studio-note" id="studio" aria-labelledby="studio-title">
          <h2 id="studio-title">
            Пространство начинается с&nbsp;логики плана и&nbsp;заканчивается точностью детали.
          </h2>
          <p>
            Antresole — студия дизайна и архитектуры. Показываем проект целиком:
            от общей атмосферы до планировочного решения и рабочих развёрток.
          </p>
        </section>

        <section className="project-index" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Проекты</h2>
          <Link className="project-row" href="/project/baltiyskiy-99">
            <span>Балтийский 99</span>
            <span>Интерьер · 99 м²</span>
            <span>2022</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
