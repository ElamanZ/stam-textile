import { ImageResponse } from "next/og";

export const alt =
  "Stam Textile — швейное производство и пошив одежды на заказ в Бишкеке";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #2b2742 52%, #4a4670 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.12,
            maxWidth: 960,
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, "Noto Sans", sans-serif',
          }}
        >
          Stam Textile
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.9)",
            marginTop: 22,
            maxWidth: 920,
            lineHeight: 1.35,
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, "Noto Sans", sans-serif',
          }}
        >
          Швейное производство и пошив одежды на заказ в Бишкеке
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.62)",
            marginTop: 18,
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, "Noto Sans", sans-serif',
          }}
        >
          Контрактный пошив · Образцы · Маркетплейсы · контроль ОТК
        </div>
      </div>
    ),
    { ...size },
  );
}
