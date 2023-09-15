import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div tw="flex">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex flex-col font-bold tracking-tight text-gray-900 text-left">
              <span tw="text-2xl sm:text-3xl">
                Tushar Ibtekar | Software Engineer
              </span>
              <span tw="text-indigo-600 text-xl sm:text-xl">
                Turning caffeine into code
              </span>
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
