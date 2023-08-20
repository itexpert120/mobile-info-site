import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: { device_key: string };
}) {
  // Font
  const interSemiBold = fetch(
    new URL("../../../../public/Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // device details
  const { data: deviceDetails } = await fetch(
    "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec",
    {
      method: "POST",
      body: JSON.stringify({
        route: "device-detail",
        key: params.device_key,
      }),
    }
  ).then((res) => res.json());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          backgroundImage:
            "url(https://cruip-tutorials-next.vercel.app/social-card-bg.jpg)",
          backgroundSize: "100% 100%",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
          padding: "40px 80px",
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            color: "white",
            marginBottom: 24,
            whiteSpace: "pre-wrap",
          }}
        >
          {deviceDetails.device_name + " Specifications"}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
