import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

/**
 * The card that appears when the site is shared on LinkedIn, WhatsApp,
 * Slack or X. Generated at build time from siteConfig — no image asset
 * to keep in sync, and the name is the largest thing on it, same as
 * the hero.
 */
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#60a5fa", letterSpacing: 2 }}>
          {siteConfig.role.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#a1a1aa", maxWidth: 980 }}>
            {siteConfig.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>
          {siteConfig.primaryStack.join("  ·  ")}
        </div>
      </div>
    ),
    size
  );
}
