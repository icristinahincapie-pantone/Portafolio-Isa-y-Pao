"use client";

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

export function BrandScroller() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {brands.map((brand) => (
        <div key={brand.alt} className="flex items-center justify-center w-36">
          <img
            alt={brand.alt}
            className="pointer-events-none h-8 select-none grayscale brightness-[0.6] dark:brightness-[0.4] transition-all duration-300 hover:grayscale-0 hover:brightness-100"
            src={brand.src}
          />
        </div>
      ))}
    </div>
  );
}
