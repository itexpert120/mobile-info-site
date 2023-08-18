import { getShelfDevices } from "@/actions/get-recommended";
import { shuffle } from "@/lib/utils";
import { DeviceBox } from "./device-box";
// import Image from "next/image";

export async function RenderShelfDevices() {
  const shelf = await getShelfDevices();
  const shuffledItems = shuffle(shelf);

  return (
    <div
      id="inshelf-devices-scroll"
      className="mx-auto max-w-full flex flex-row gap-4 overflow-auto"
    >
      {shuffledItems.map((item: RecommendedDevice) => (
        <DeviceBox item={item} key={item.key} />
      ))}
    </div>
  );
}
