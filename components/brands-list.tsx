import { Suspense } from "react";

import { BiRightArrowAlt } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";

import { getTopBrands } from "@/actions/get-brands";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
export default async function BrandsList() {
  return (
    <div className="my-8 flex flex-col gap-y-4">
      <h2 className="font-bold text-3xl">Top Brands</h2>
      <div>
        <ul className="flex flex-col gap-y-2 max-w-[256px]">
          <Suspense fallback={<Loader />}>
            <RenderBrandsList />
          </Suspense>
          <li className="border p-2 rounded-md shadow-sm bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition text-white group">
            <Link href="#">
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

export function Loader() {
  const SKELETON = ["...", "...", "...", "...", "...", "..."];
  return SKELETON.map((item, index) => (
    <li
      key={index}
      className="border p-2 rounded-md shadow-sm hover:shadow-lg transition"
    >
      <Link href="#">
        <div className="flex flex-row gap-x-2 items-center">
          <FiSmartphone className="text-xl" />
          <Skeleton className="w-[128px] h-[24px] rounded-md" />
        </div>
      </Link>
    </li>
  ));
}

export async function RenderBrandsList() {
  const topBrands: Brand[] = await getTopBrands();
  return topBrands.map((brand) => (
    <li
      className="border p-2 rounded-md shadow-sm group hover:shadow-lg transition"
      key={brand.key}
    >
      <Link href="#">
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
