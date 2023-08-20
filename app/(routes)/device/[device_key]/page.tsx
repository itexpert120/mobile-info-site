import type { Metadata, ResolvingMetadata } from "next";

import getDeviceDetails from "@/actions/get-device";
import DeviceHeroDetails from "@/components/ui/device-hero-details";
import Heading from "@/components/heading";
import DeviceMoreDetails from "@/components/ui/device-more-details";
import DevicePictures from "@/components/ui/device-pictures";
import { Suspense } from "react";
import RecommendedLoader from "@/components/ui/recommended-loader";
import { RenderDevices } from "@/components/ui/render-devices";
import { getAllDevices } from "@/actions/get-devices";

type Props = {
  params: { device_key: string };
};

export async function generateMetadata({
  params,
}: Props): // parent?: ResolvingMetadata
Promise<Metadata> {
  const device_key = params.device_key;

  const deviceDetails = await getDeviceDetails(device_key);

  return {
    title: `${deviceDetails.device_name} Specifications`,
    description: `Specifications for ${deviceDetails.device_name}`,
  };
}

export async function generateStaticParams() {
  const allDevices = await getAllDevices();
  const device_keys_with_array = allDevices.map((brand) =>
    brand.device_list.map((device) => ({
      device_key: device.key,
    }))
  );

  return device_keys_with_array.flat();
}

export default async function DevicePage({
  params,
}: {
  params: { device_key: string };
}) {
  const deviceDetails = await getDeviceDetails(params.device_key);
  const moreInformation = Object.entries(deviceDetails.more_information);
  return (
    <div>
      <Heading title={deviceDetails.device_name} showBackArrow />
      <DeviceHeroDetails deviceDetails={deviceDetails} />
      <DeviceMoreDetails moreDetails={deviceDetails.more_specification} />
      <DevicePictures pictures={deviceDetails.pictures} />
      {moreInformation.map(([key, value]) => (
        <div key={key} className="my-4">
          <h2 className="text-2xl font-bold my-4">{key}</h2>
          <Suspense fallback={<RecommendedLoader />}>
            <RenderDevices devices={value} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}
