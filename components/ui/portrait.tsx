import Image from "next/image";
import { clsx } from "clsx";
import portrait from "@/public/images/My-image/mohau-portrait.webp";
import { siteConfig } from "@/config/site";

interface PortraitProps {
  className?: string;
  /** Rendered width hint for the image optimizer, e.g. "(min-width: 768px) 288px, 112px". */
  sizes: string;
  /** Set on the hero instance only — it's above the fold. */
  priority?: boolean;
}

/**
 * One place for the photo so the hero and About page can't drift apart.
 * A static import gives next/image the intrinsic dimensions (no layout
 * shift) and a blurred placeholder for free; the optimizer serves
 * AVIF/WebP at the size each breakpoint actually needs.
 *
 * Source is a 600×680 crop of the original Me.png (641 KB → 25 KB).
 */
export function Portrait({ className, sizes, priority }: PortraitProps) {
  return (
    <Image
      src={portrait}
      alt={`Portrait of ${siteConfig.name}`}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      className={clsx("object-cover", className)}
      style={{ objectPosition: "45% 30%" }}
    />
  );
}
