import Image from "next/image";
import { cn } from "@/lib/utils";

const DEFAULT_LOGO_SIZE = 44;

export function ListMyProductLogo({
  size = DEFAULT_LOGO_SIZE,
  className,
  priority,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="ListMyProduct"
      width={size}
      height={size}
      className={cn("shrink-0 object-contain", className)}
      priority={priority}
    />
  );
}

export function ListMyProductWordmark({
  showText = true,
  size = DEFAULT_LOGO_SIZE,
  textClassName,
  className,
  priority,
}: {
  showText?: boolean;
  size?: number;
  textClassName?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <ListMyProductLogo size={size} priority={priority} />
      {showText ? (
        <span className={cn("font-serif text-xl tracking-tight", textClassName)}>ListMyProduct</span>
      ) : null}
    </span>
  );
}
