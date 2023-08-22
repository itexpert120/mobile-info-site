import type { Metadata, ResolvingMetadata } from "next";

import { GetBrandDetails } from "@/actions/get-devices";
import Heading from "@/components/heading";
import RenderAllDevices from "@/components/ui/render-all-devices";
import { Suspense } from "react";
import { AllDevicesSkeleton } from "@/components/ui/all-devices-skeleton";
import { getAllBrands } from "@/actions/get-brands";

type Props = {
  params: { brand_id: string; page: string };
};

export async function generateMetadata({
  params,
}: Props): // parent?: ResolvingMetadata
Promise<Metadata> {
  const brand_id = params.brand_id;

  const brandDetails = await GetBrandDetails(parseInt(brand_id));

  return {
    title: `${brandDetails?.brand_name} Devices | Page ${params.page}`,
    description: `${brandDetails?.brand_name} All Devices`,
  };
}

export default async function BrandDevicePage({
  params,
}: {
  params: { brand_id: string; page: string };
}) {
  const brand_id = parseInt(params.brand_id);
  const page = parseInt(params.page);

  const brandDetails = await GetBrandDetails(brand_id);

  if (!brandDetails) {
    return "No Found";
  }
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
        <RenderAllDevices filteredBrand={brandDetails} page={page} />
      </Suspense>
    </div>
  );
}
