import Image from "next/image";

/**
 * Marco de teléfono para mostrar capturas reales de la app (732 px de ancho, recortadas).
 */
export default function PhoneFrame({ src, alt, priority = false, className = "", sizes = "300px" }) {
  return (
    <div className={`rounded-[2.6rem] bg-ink p-2 ${className}`}>
      <div className="relative aspect-[9/18.5] overflow-hidden rounded-[2.15rem] bg-[#f4f6f9]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
