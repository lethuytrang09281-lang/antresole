import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/ArrowIcon";
import { DrawingReveal } from "../../components/DrawingReveal";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Балтийский 99",
  description: "Проект жилого интерьера площадью 99 м²: визуализации, планировочное решение и развёртка гостиной.",
};

export default function BaltiyskiyProject() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main className="case-page" id="main-content">
        <section className="case-cover" aria-labelledby="case-title">
          <Image
            src="/images/baltiyskiy/living-hero.webp"
            alt="Визуализация гостиной и кухни проекта Балтийский 99"
            fill
            priority
            sizes="100vw"
          />
          <div className="case-cover__shade" />
          <Link href="/" className="case-cover__back"><ArrowIcon direction="back" /> Все проекты</Link>
          <div className="case-cover__meta"><span>Жилой интерьер</span><span>99 м²</span><span>2022</span></div>
          <h1 id="case-title">Балтийский<br />99</h1>
          <p>
            Светлая основа, точные тёмные линии и спокойный ритм натуральных фактур.
          </p>
        </section>

        <section className="case-statement" aria-label="О проекте">
          <p>
            Общее пространство кухни и гостиной собрано вокруг длинных горизонталей,
            мягкого дневного света и выхода на лоджию. В приватных комнатах та же
            сдержанная палитра меняет характер через дерево, текстиль и цветовые акценты.
          </p>
          <dl>
            <div><dt>Статус</dt><dd>Визуализации</dd></div>
            <div><dt>Тип</dt><dd>Жилой интерьер</dd></div>
          </dl>
          <span className="case-statement__index">01<small>/01</small></span>
        </section>

        <section className="gallery" aria-label="Визуализации проекта">
          <figure className="gallery__wide">
            <Image src="/images/baltiyskiy/loggia.webp" alt="Визуализация лоджии с креслом и растениями" width="1200" height="1500" loading="lazy" sizes="100vw" />
            <figcaption>Лоджия / 01</figcaption>
          </figure>
          <figure className="gallery__landscape">
            <Image src="/images/baltiyskiy/bedroom.webp" alt="Визуализация спальни с рабочим местом" width="1800" height="1200" loading="lazy" sizes="(max-width: 820px) 100vw, 66vw" />
            <figcaption>Спальня / 02</figcaption>
          </figure>
          <div className="gallery__pair">
            <figure>
              <Image src="/images/baltiyskiy/bathroom.webp" alt="Визуализация ванной комнаты в светлом камне" width="1200" height="1500" loading="lazy" sizes="(max-width: 820px) 100vw, 50vw" />
              <figcaption>Ванная / 03</figcaption>
            </figure>
            <figure>
              <Image src="/images/baltiyskiy/child-room.webp" alt="Визуализация детской комнаты с терракотовой кроватью" width="1200" height="1500" loading="lazy" sizes="(max-width: 820px) 100vw, 50vw" />
              <figcaption>Детская / 04</figcaption>
            </figure>
          </div>
          <figure className="gallery__portrait">
            <Image src="/images/baltiyskiy/hallway.webp" alt="Визуализация светлой прихожей" width="1200" height="1500" loading="lazy" sizes="(max-width: 820px) 100vw, 54vw" />
            <figcaption>Прихожая / 05</figcaption>
          </figure>
        </section>

        <section className="planning" aria-labelledby="planning-title">
          <div className="planning__copy">
            <h2 id="planning-title">Планировочное<br />решение</h2>
            <p>
              План связывает кухню, столовую, гостиную и лоджию в единый дневной маршрут,
              сохраняя отдельные приватные комнаты и функциональные зоны хранения.
            </p>
          </div>
          <figure className="planning__sheet">
            <a href="/images/baltiyskiy/plan.webp" target="_blank" rel="noreferrer">
              <Image src="/images/baltiyskiy/plan.webp" alt="Финальное планировочное решение квартиры 99 квадратных метров" width="2000" height="1188" loading="lazy" sizes="100vw" />
            </a>
            <figcaption>Финальный вариант / 07.07.2022</figcaption>
            <a className="document-open" href="/images/baltiyskiy/plan.webp" target="_blank" rel="noreferrer">
              Открыть план крупно <ArrowIcon direction="diagonal" />
            </a>
          </figure>
        </section>

        <section className="evidence" aria-labelledby="evidence-title">
          <div className="evidence__copy">
            <h2 id="evidence-title">Чертёж /<br />пространство</h2>
            <p>
              Развёртка фиксирует пропорции, привязки и отделку стены гостиной.
              Переместите линию, чтобы сопоставить рабочий лист с визуализацией.
            </p>
          </div>
          <DrawingReveal />
        </section>

        <nav className="case-next" aria-label="Навигация по проектам">
          <Link href="/">Вернуться к проектам <ArrowIcon direction="forward" /></Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
