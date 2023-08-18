import getDeviceDetails from "@/actions/get-device";
import DeviceHeroDetails from "@/components/device-hero-details";
import Heading from "@/components/heading";

export default async function DevicePage({
  params,
}: {
  params: { device_key: string };
}) {
  const deviceDetails = await getDeviceDetails(params.device_key);
  return (
    <div>
      <Heading title={deviceDetails.device_name} showBackArrow />
      <DeviceHeroDetails deviceDetails={deviceDetails} />
    </div>
  );
}
