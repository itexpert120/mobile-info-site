import { Suspense } from "react";

import { RenderDailyInterests } from "./ui/render-daily-interests";
import { ListLoader } from "./ui/list-loader";

export default async function DailyInterests() {
  return (
    <div className="my-8 flex flex-col gap-y-4 max-w-sm md:max-w-6xl">
      <h2 className="font-bold text-3xl">Top Interested Devices of Today</h2>
      <Suspense fallback={<ListLoader />}>
        <RenderDailyInterests />
      </Suspense>
    </div>
  );
}
