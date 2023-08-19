import { DeviceBox } from "./device-box";
// import Image from "next/image";

interface RenderDevicesProps {
  devices: any;
}

export async function RenderDevices({ devices }: RenderDevicesProps) {
  return (
    <div
      id="latest-devices-scroll"
      className="mx-auto max-w-full flex flex-row gap-4 overflow-auto"
    >
      {devices.map((item: RecommendedDevice) => (
        <DeviceBox item={item} key={item.key} />
      ))}
    </div>
  );
}
