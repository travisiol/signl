import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#05070A",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: "3px solid #3DE8FF",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
