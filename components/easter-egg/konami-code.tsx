"use client";

import { useEffect, useState } from "react";
import { EasterEggOverlay } from "@/components/easter-egg/easter-egg-overlay";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/**
 * The spec is explicit: exactly one Easter egg, no more. This is it.
 * Mounted once in the root layout; renders nothing until the sequence
 * is matched, so it costs effectively zero attention or bytes on every
 * normal page load.
 */
export function KonamiCode() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let progress = 0;

    function onKeyDown(e: KeyboardEvent) {
      const expected = KONAMI_CODE[progress];
      const pressed = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      if (pressed === expected) {
        progress += 1;
        if (progress === KONAMI_CODE.length) {
          setIsVisible(true);
          progress = 0;
        }
      } else {
        progress = pressed === KONAMI_CODE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!isVisible) return null;

  return <EasterEggOverlay onClose={() => setIsVisible(false)} />;
}
