import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos?: Logo[];
};

const defaultLogos: Logo[] = [
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
];

export function LogoCloud({ className, logos = defaultLogos, ...props }: LogoCloudProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <div className="grid grid-cols-2 border-x md:grid-cols-3 lg:grid-cols-5">
        {logos.map((logo, idx) => (
          <div
            key={logo.alt}
            className={cn(
              "flex items-center justify-center border-b bg-background px-4 py-10 md:p-8",
              (idx + 1) % 2 !== 0 && "border-r",
              (idx + 1) % 2 === 0 && "md:border-r",
              (idx + 1) % 3 === 0 && "md:border-r-0",
              (idx + 1) % 3 === 0 && "lg:border-r",
              idx === logos.length - 1 && "border-r-0"
            )}
          >
            <img
              alt={logo.alt}
              className="pointer-events-none h-7 select-none dark:brightness-0 dark:invert"
              src={logo.src}
            />
          </div>
        ))}
      </div>

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}
