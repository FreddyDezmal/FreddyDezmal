import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Belt-and-suspenders alongside CSP's frame-ancestors 'none' —
          // X-Frame-Options is redundant in modern browsers but still
          // matters for older ones that don't honor frame-ancestors.
          { key: "X-Frame-Options", value: "DENY" },
          // Isolates this site's window from cross-origin popups it opens
          // (e.g. the external links opened via target="_blank"), so a
          // malicious destination page can't reach back via window.opener.
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          // Only meaningful once this is actually served over HTTPS in
          // production (Vercel does this by default) — preload requires
          // submission to hstspreload.org, so start without it and add
          // preload once the domain is confirmed stable.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
