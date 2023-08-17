import Image from "next/image";

import { GetBrandDevices } from "@/actions/get-devices";
import Pagination from "./pagination";

interface RenderAllDevicesProps {
  brand_id: number;
  page: number;
}

export default async function RenderAllDevices({
  brand_id,
  page,
}: RenderAllDevicesProps) {
  const { device_list: brandDevices, total_page } = await GetBrandDevices(
    brand_id,
    page
  );
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-4 md:gap-4 my-4">
        {brandDevices ? (
          brandDevices.map((device: DeviceList) => (
            <div
              className="flex-grow-0 flex-shrink-0 basis-40 w-40 h-44 sm:basis-44 sm:w-44 sm:h-44 rounded-md border"
              key={device.key}
            >
              <div className="flex flex-col items-center justify-center w-full h-full">
                <Image
                  src={device.device_image}
                  height={100}
                  width={100}
                  style={{ objectFit: "cover" }}
                  alt={device.key}
                />
                <p className="text-sm mt-1 font-semibold text-center">
                  {device.device_name}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>No Device Found</div>
        )}
      </div>
      <div className="my-4">
        <Pagination total_page={total_page} page={page} brand_id={brand_id} />
      </div>
    </div>
  );
}
