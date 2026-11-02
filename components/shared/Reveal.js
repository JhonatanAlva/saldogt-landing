"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Revela con GSAP los elementos marcados con `data-reveal` dentro del contenedor
 * cuando entran en pantalla. Respeta `prefers-reduced-motion`.
 */
export default function Reveal({ as: Tag = "div", children, className = "", ...props }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray("[data-reveal]", scope.current);
      if (!items.length) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(items, { autoAlpha: 0, y: 28 });

        ScrollTrigger.batch(items, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.08,
              overwrite: true,
            }),
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(items, { autoAlpha: 1, y: 0 });
      });
    },
    { scope }
  );

  return (
    <Tag ref={scope} className={className} {...props}>
      {children}
    </Tag>
  );
}
