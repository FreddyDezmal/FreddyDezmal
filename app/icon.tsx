import { ImageResponse } from "next/og";

/** A plain monogram favicon, generated — no binary asset to maintain. */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#fafafa",
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        M
      </div>
    ),
    size
  );
}
