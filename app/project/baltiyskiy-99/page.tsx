import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DrawingReveal } from "../../components/DrawingReveal";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Балтийский 99",
  description:
    "Проект жилого интерьера площадью 99 м²: визуализации, планировочное решение и развёртка гостиной.",
};

export default function BaltiyskiyProject() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main className="case-page">
        <header className="case-title">
          <Link href="/" className="case-title__back">← Все проекты</Link>
          <h1>Балтийский 99</h1>
          <dl>
            <div><dt>Тип</dt><dd>Жилой интерьер</dd></div>
            <div><dt>Площадь</dt><dd>99 м²</dd></div>
            <div><dt>Год</dt><dd>2022</dd></div>
            <div><dt>Материал</dt><dd>Визуализации</dd></div>
          </dl>
        </header>

        <figure className="case-hero">
          <Image
            src="/images/baltiyskiy/living-hero.webp"
            alt="Визуализация гостиной и кухни проекта Балтийский 99"
            width="2200"
            height="1238"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <figcaption>Гостиная и кухня · общая перспектива</figcaption>
        </figure>

        <section className="case-intro" aria-labelledby="case-intro-title">
          <h2 id="case-intro-title">
            Светлая основа, точные тёмные линии и&nbsp;спокойный ритм натуральных фактур.
          </h2>
          <p>
            Общее пространство кухни и гостиной собрано вокруг длинных горизонталей,
            мягкого дневного света и выхода на лоджию. В приватных комнатах та же
            сдержанная палитра меняет характер через дерево, текстиль и цветовые акценты.
          </p>
        </section>

        <section className="visual-sequence" aria-label="Визуализации проекта">
          <figure className="plate plate--portrait plate--right">
            <Image src="/images/baltiyskiy/loggia.webp" alt="Визуализация лоджии с креслом и растениями" width="1200" height="1500" loading="lazy" sizes="(max-width: 820px) 86vw, 42vw" />
            <figcaption><span>Лоджия</span><span>01 / 05</span></figcaption>
          </figure>

          <figure className="plate plate--landscape plate--left">
            <Image src="/images/baltiyskiy/bedroom.webp" alt="Визуализация спальни с рабочим местом" width="1800" height="1200" loading="lazy" sizes="(max-width: 820px) 86vw, 68vw" />
            <figcaption><span>Спальня</span><span>02 / 05</span></figcaption>
          </figure>

          <div className="plate-pair">
            <figure className="plate">
              <Image src="/images/baltiyskiy/bathroom.webp" alt="Визуализация ванной комнаты в светлом камне" width="1200" height="1500" loading="lazy" sizes="(max-width: 820px) 86vw, 46vw" />
              <figcaption><span>Ванная</span><span>03 / 05</span></figcaption>
            </figure>
            <figure className="plate plate--offset">
              <Image src="/images/baltiyskiy/child-room.webp" alt="Визуализация детской комнаты с терракотовой кроватью" width="1200" height="1500" loading="lazy" sizes="(max-width: 820px) 86vw, 46vw" />
              <figcaption><span>Детская</span><span>04 / 05</span></figcaption>
            </figure>
          </div>

          <figure className="plate plate--portrait plate--center">
            <Image src="/images/baltiyskiy/hallway.webp" alt="Визуализация светлой прихожей" width="1200" height="1500" loading="lazy" sizes="(max-width: 820px) 86vw, 42vw" />
            <figcaption><span>Прихожая</span><span>05 / 05</span></figcaption>
          </figure>
        </section>

        <section className="planning" aria-labelledby="planning-title">
          <div className="planning__copy">
            <h2 id="planning-title">Планировочное решение</h2>
            <p>
              План связывает кухню, столовую, гостиную и лоджию в один дневной маршрут,
              сохраняя отдельные приватные комнаты и функциональные зоны хранения.
            </p>
          </div>
          <figure>
            <Image src="/images/baltiyskiy/plan.webp" alt="Финальное планировочное решение квартиры 99 квадратных метров" width="2000" height="1188" loading="lazy" sizes="(max-width: 820px) 100vw, 75vw" />
            <figcaption>Финальный вариант · 07.07.2022</figcaption>
          </figure>
        </section>

        <section className="evidence" aria-labelledby="evidence-title">
          <div className="evidence__copy">
            <h2 id="evidence-title">От линии к пространству</h2>
            <p>
              Развёртка фиксирует пропорции, привязки и отделку стены гостиной.
              Переместите линию, чтобы сопоставить рабочий лист с визуализацией.
            </p>
          </div>
          <DrawingReveal />
        </section>

        <nav className="case-next" aria-label="Навигация по проектам">
          <Link href="/">Вернуться к портфолио <span aria-hidden="true">→</span></Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
