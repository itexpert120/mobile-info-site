import { getShelfDevices } from "@/actions/get-recommended";
import { shuffle } from "@/lib/utils";
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
        <div
          className="flex-grow-0 flex-shrink-0 basis-44 w-44 h-44 rounded-md border"
          key={item.key}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src={item.device_image}
              style={{ objectFit: "cover", width: "100px", height: "100px" }}
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
