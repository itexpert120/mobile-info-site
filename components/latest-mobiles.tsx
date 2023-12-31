import { Suspense } from "react";

import RecommendedLoader from "./ui/recommended-loader";
import { RenderLatestDevices } from "./ui/render-latest-devices";

export default async function LatestMobiles() {
  return (
    <div className="my-8 flex flex-col gap-y-4">
      <h2 className="font-bold text-3xl">Latest Devices</h2>
      <Suspense fallback={<RecommendedLoader />}>
        <RenderLatestDevices />
      </Suspense>
    </div>
  );
}
