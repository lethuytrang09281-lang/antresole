"use client";

import { useState } from "react";
import Image from "next/image";

export function DrawingReveal() {
  const [position, setPosition] = useState(50);

  return (
    <div className="drawing-reveal">
      <div className="drawing-reveal__frame">
        <Image
          className="drawing-reveal__drawing"
          src="/images/baltiyskiy/elevation.webp"
          alt="Развёртка стен гостиной"
          width="2000"
          height="1188"
          loading="lazy"
          sizes="100vw"
        />
        <div
          className="drawing-reveal__space"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src="/images/baltiyskiy/living-hero.webp"
            alt=""
            width="2200"
            height="1238"
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <span
          className="drawing-reveal__line"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />
      </div>
      <label className="drawing-reveal__control">
        <span>Чертёж</span>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onInput={(event) => setPosition(Number(event.currentTarget.value))}
          aria-label="Сравнить чертёж и визуализацию"
        />
        <span>Пространство</span>
      </label>
    </div>
  );
}
