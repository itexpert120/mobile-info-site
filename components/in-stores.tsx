import { Suspense } from "react";

import RecommendedLoader from "./ui/recommended-loader";
import { RenderShelfDevices } from "./ui/render-in-stores";

export default async function InStores() {
  return (
    <div className="my-8 flex flex-col gap-y-4">
      <h2 className="font-bold text-3xl">Devices In Stores</h2>
      <Suspense fallback={<RecommendedLoader />}>
        <RenderShelfDevices />
      </Suspense>
    </div>
  );
}
