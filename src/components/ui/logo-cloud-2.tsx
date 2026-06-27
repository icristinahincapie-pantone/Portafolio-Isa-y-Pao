import { cn } from "@/lib/utils";

const brands = [
  { name: "Éxito", description: "Cadena de retail" },
  { name: "Nestlé", description: "Alimentos y bebidas" },
  { name: "Coca-Cola", description: "Bebidas" },
  { name: "L'Oréal", description: "Cosméticos y belleza" },
  { name: "Tosh", description: "Snacks saludables" },
  { name: "Tennis", description: "Snacks" },
];

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border md:grid-cols-3 lg:grid-cols-6",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      {brands.map((brand, idx) => (
        <div
          key={brand.name}
          className={cn(
            "flex flex-col items-center justify-center gap-2 border-r border-b bg-background px-4 py-10 md:p-8 transition-colors hover:bg-secondary/50",
            idx % 2 !== 0 && "border-r-0 md:border-r",
            idx >= 4 && "md:border-b-0",
            idx >= 2 && "lg:border-b-0"
          )}
        >
          <span className="text-xl font-bold tracking-tight text-gray-400 md:text-2xl">
            {brand.name}
          </span>
          <span className="text-xs text-gray-300">{brand.description}</span>
        </div>
      ))}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}
