import { ImageResponse } from "next/og";

export const alt = "SIGNL — Trade Memes. Stack the Signal.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05070A",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(14,165,233,0.28), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 180,
            height: 110,
            borderRadius: 10,
            border: "3px solid #3DE8FF",
            boxShadow: "0 0 70px rgba(61,232,255,0.45)",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 96,
            color: "#E8EDF2",
            fontWeight: 600,
            letterSpacing: -2,
          }}
        >
          SIGNL
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 30,
            letterSpacing: 6,
            color: "#3DE8FF",
            fontWeight: 600,
          }}
        >
          TRADE MEMES. STACK THE SIGNAL.
        </div>
      </div>
    ),
    { ...size },
  );
}
