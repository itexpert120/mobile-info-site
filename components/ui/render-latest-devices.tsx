import { getLatestDevices } from "@/actions/get-recommended";
import { shuffle } from "@/lib/utils";
import { DeviceBox } from "./device-box";
// import Image from "next/image";

export async function RenderLatestDevices() {
  const latest = await getLatestDevices();
  const shuffleItems = shuffle(latest);

  return (
    <div
      id="latest-devices-scroll"
      className="mx-auto max-w-full flex flex-row gap-4 overflow-auto"
    >
      {shuffleItems.map((item: RecommendedDevice) => (
        <DeviceBox item={item} key={item.key} />
      ))}
    </div>
  );
}
