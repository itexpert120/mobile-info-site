import AllBrandsLoader from "@/components/ui/all-brands-loader";
import RenderAllBrands from "@/components/ui/render-all-brands";
import { Suspense } from "react";

import Heading from "@/components/heading";

export default function Brands() {
  return (
    <div>
      <Heading title="All Brands" showBackArrow back_url="/" />
      <Suspense fallback={<AllBrandsLoader />}>
        <RenderAllBrands />
      </Suspense>
    </div>
  );
}
