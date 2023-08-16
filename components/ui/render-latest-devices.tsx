import { getLatestDevices } from "@/actions/get-recommended";
import { shuffle } from "@/lib/utils";
import Image from "next/image";

export async function RenderLatestDevices() {
  const latest = await getLatestDevices();
  const shuffleItems = shuffle(latest);

  return (
    <div
      id="latest-devices-scroll"
      className="mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl flex flex-row gap-4 overflow-auto"
    >
      {shuffleItems.map((item: RecommendedDevice) => (
        <div
          className="flex-grow-0 flex-shrink-0 basis-44 w-44 h-44 rounded-md border"
          key={item.key}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Image
              src={item.device_image}
              height={100}
              width={100}
              style={{ objectFit: "cover" }}
              alt={item.key}
            />
            <p className="text-sm mt-1 font-semibold text-center">
              {item.device_name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
