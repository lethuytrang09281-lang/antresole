import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./components/ArrowIcon";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Antresole — design & architecture studio",
  description: "Архитектура интерьера от планировочной логики до деталей пространства.",
};

const projects: Array<{ name: string; year: string; type: string; href: string | null }> = [
  { name: "Балтийский 99", year: "2022", type: "Жилой интерьер", href: "/project/baltiyskiy-99" },
  { name: "Хорошевский", year: "—", type: "В подготовке", href: null },
  { name: "Foriver", year: "—", type: "В подготовке", href: null },
  { name: "Level Мичуринский", year: "—", type: "В подготовке", href: null },
  { name: "Дом Мытищи", year: "—", type: "В подготовке", href: null },
];

export default function Home() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main id="main-content">
        <section className="landing" aria-labelledby="landing-title">
          <h1 id="landing-title" className="sr-only">Antresole — студия дизайна и архитектуры</h1>
          <div className="landing__wordmark" aria-hidden="true">
            <Image
              src="/images/antresole-logo.webp"
              alt=""
              width="1400"
              height="376"
              priority
              sizes="100vw"
            />
          </div>

          <div className="landing__manifesto">
            <p>Пространства, собранные от логики плана до точности детали.</p>
            <span>Antresole / портфолио</span>
          </div>

          <Link className="feature" href="/project/baltiyskiy-99" aria-label="Открыть проект Балтийский 99">
            <figure className="feature__image">
              <Image
                src="/images/baltiyskiy/living-hero.webp"
                alt="Визуализация светлой гостиной, объединённой с кухней"
                width="2200"
                height="1238"
                priority
                sizes="100vw"
              />
            </figure>
            <div className="feature__marker" aria-hidden="true">+</div>
            <div className="feature__bar">
              <span className="feature__number">01</span>
              <span className="feature__name">Балтийский 99</span>
              <span>99 м²</span>
              <span>2022</span>
              <ArrowIcon direction="diagonal" />
            </div>
          </Link>
        </section>

        <section className="method" id="studio" aria-labelledby="method-title">
          <div className="method__drawing">
            <Image
              src="/images/baltiyskiy/plan.webp"
              alt="Планировочное решение проекта Балтийский 99"
              width="2000"
              height="1188"
              loading="lazy"
              sizes="(max-width: 820px) 100vw, 62vw"
            />
            <span className="method__coordinate">X: 99 M² / Y: 2022</span>
          </div>
          <div className="method__copy">
            <h2 id="method-title">От линии<br />к пространству</h2>
            <p>
              Antresole показывает проект как систему: общая атмосфера,
              планировочная логика, рабочие развёртки и детали интерьера.
            </p>
            <dl>
              <div><dt>01</dt><dd>Планировка</dd></div>
              <div><dt>02</dt><dd>Архитектура интерьера</dd></div>
              <div><dt>03</dt><dd>Рабочая документация</dd></div>
            </dl>
          </div>
        </section>

        <section className="project-index" id="projects" aria-labelledby="projects-title">
          <div className="project-index__head">
            <h2 id="projects-title">Проекты</h2>
            <p>Избранные жилые интерьеры</p>
          </div>
          <div className="project-index__list">
            {projects.map((project) => {
              const content = (
                <>
                  <span className="project-row__year">({project.year})</span>
                  <span className="project-row__name">{project.name}</span>
                  <span className="project-row__type">{project.type}</span>
                  <span className="project-row__arrow" aria-hidden="true">
                    {project.href ? <ArrowIcon direction="diagonal" /> : "—"}
                  </span>
                </>
              );

              return project.href ? (
                <Link className="project-row" href={project.href} key={project.name}>{content}</Link>
              ) : (
                <div className="project-row project-row--pending" key={project.name} aria-label={`${project.name}, в подготовке`}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
