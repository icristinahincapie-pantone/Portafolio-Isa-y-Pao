"use client";

import { cn } from "@/lib/utils";

type Brand = {
  src: string;
  alt: string;
};

const brands: Brand[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Almacenes_exito_logo.svg",
    alt: "Éxito",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_textlogo.svg",
    alt: "Nestlé",
  },
  {
    src: "https://static.cdnlogo.com/logos/l/88/loreal.svg",
    alt: "L'Oréal",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/The_Coca-Cola_Company_logo.svg",
    alt: "Coca-Cola",
  },
  {
    src: "https://static.cdnlogo.com/logos/s/68/spotify.svg",
    alt: "Spotify",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b3/ASUS_Logo-neu.svg",
    alt: "ASUS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg",
    alt: "LinkedIn",
  },
];

type BrandScrollerProps = {
  reverse?: boolean;
  className?: string;
};

function BrandRow({ reverse, className }: BrandScrollerProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]",
        className
      )}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)] flex-row",
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          )}
        >
          {brands.map((brand) => (
            <div
              key={brand.alt}
              className="flex items-center gap-3 w-32"
            >
              <img
                alt={brand.alt}
                className="pointer-events-none h-7 select-none dark:brightness-0 dark:invert"
                src={brand.src}
              />
              <span className="text-base font-semibold opacity-80">
                {brand.alt}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function BrandScroller() {
  return (
    <div className="flex flex-col gap-4">
      <BrandRow />
      <BrandRow reverse />
    </div>
  );
}
