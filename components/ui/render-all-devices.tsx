// import Image from "next/image";

import { GetBrandDevices } from "@/actions/get-devices";
import Pagination from "./pagination";
import { DeviceBox } from "./device-box";

interface RenderAllDevicesProps {
  filteredBrand: Brand;
  page: number;
}

export default async function RenderAllDevices({
  filteredBrand,
  page,
}: RenderAllDevicesProps) {
  const { device_list: brandDevices, total_page } = await GetBrandDevices(
    filteredBrand,
    page
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-4 md:gap-4 my-4">
        {brandDevices ? (
          brandDevices.map((device: DeviceList) => (
            <DeviceBox item={device} key={device.key} />
          ))
        ) : (
          <div>No Device Found</div>
        )}
      </div>
      <div className="my-4">
        <Pagination
          total_page={total_page}
          page={page}
          brand_id={filteredBrand.brand_id}
        />
      </div>
    </div>
  );
}
