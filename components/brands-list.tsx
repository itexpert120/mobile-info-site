import { Suspense } from "react";

import { BiRightArrowAlt } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";

import { getTopBrands } from "@/actions/get-brands";
import Link from "next/link";
import BrandsLoader from "./ui/brands-loader";
export default async function BrandsList() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <ul className="flex flex-col gap-y-2 max-w-full md:max-w-[256px]">
          <Suspense fallback={<BrandsLoader />}>
            <RenderBrandsList />
          </Suspense>
          <li className="border p-2 rounded-md shadow-sm bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition text-white group">
            <Link href="/brands">
              <div className="flex flex-row items-center font-semibold">
                All Brands{" "}
                <BiRightArrowAlt className="transition group-hover:translate-x-1 text-xl" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export async function RenderBrandsList() {
  const topBrands: Brand[] = await getTopBrands();
  return topBrands.map((brand) => (
    <li
      className="border p-2 rounded-md shadow-sm group hover:shadow-lg transition"
      key={brand.key}
    >
      <Link href={`/brands/${brand.brand_id}/1`}>
        <div className="flex flex-row gap-x-2 items-center">
          <FiSmartphone className="text-xl" />
          <span className="font-semibold group-hover:text-blue-700 transition">
            {brand.brand_name}
          </span>
        </div>
      </Link>
    </li>
  ));
}
