import { Suspense } from "react";

import { RenderTopTen } from "./ui/render-top-ten";
import { ListLoader } from "./ui/list-loader";

export default async function TopTen() {
  return (
    <div className="my-8 flex flex-col gap-y-4 max-w-sm md:max-w-6xl">
      <h2 className="font-bold text-3xl">Top Ten Devices</h2>
      <Suspense fallback={<ListLoader />}>
        <RenderTopTen />
      </Suspense>
    </div>
  );
}
