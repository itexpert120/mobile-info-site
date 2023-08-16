import { getDailyInterests } from "@/actions/get-recommended";
import { Badge } from "./badge";

export async function RenderDailyInterests() {
  const latest = await getDailyInterests();

  return (
    <ul id="daily-interests" className="flex flex-col gap-y-4">
      {latest.map((item: HitsDevice) => (
        <li className="flex items-center" key={item.key}>
          <span className="w-12 h-12 flex items-center justify-center text-center text-white bg-blue-600 rounded-full p-2 text-lg text-bold">
            {item.no}
          </span>{" "}
          <div className="flex items-center gap-x-2">
            <p className="ml-4 font-semibold">{item.device_name}</p>
            <Badge variant="default" className="cursor-default">
              {item.daily_hits} Hits
            </Badge>
          </div>
        </li>
      ))}
    </ul>
  );
}
