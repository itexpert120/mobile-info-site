import { GetBrandDetails, GetBrandDevices } from "@/actions/get-devices";
import Heading from "@/components/heading";
import RenderAllDevices from "@/components/ui/render-all-devices";
import { Suspense } from "react";
import { AllDevicesSkeleton } from "@/components/ui/all-devices-skeleton";

export default async function BrandDevicePage({
  params,
}: {
  params: { brand_id: string; page: string };
}) {
  const brand_id = parseInt(params.brand_id);
  const page = parseInt(params.page);

  const brandDetails = await GetBrandDetails(brand_id);
  return (
    <div>
      <Heading
        title={
          brandDetails
            ? brandDetails.brand_name + " Devices"
            : "Error: Page not found"
        }
        showBackArrow
        back_url="/brands"
      />

      <Suspense fallback={<AllDevicesSkeleton />}>
        <RenderAllDevices brand_id={brand_id} page={page} />
      </Suspense>
    </div>
  );
}
