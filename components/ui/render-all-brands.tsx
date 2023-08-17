import Link from "next/link";

import { getAllBrands } from "@/actions/get-brands";

export default async function RenderAllBrands() {
  const allBrands = await getAllBrands();
  const filteredBrands = allBrands.filter((brand) => brand.brand_name !== "");
  return (
    <div className="grid grid-cols-2 gap-2 my-2">
      {filteredBrands.map((brand, index) => (
        <div key={brand.key}>
          <Link href={`/brands/${brand.brand_id}/1`}>
            <div className="group flex flex-row items-center gap-x-2">
              <span className="w-12 h-12 flex items-center justify-center text-center text-white bg-blue-600 rounded-full p-2 text-lg text-bold">
                {index + 1}
              </span>{" "}
              <p className="text-lg group-hover:text-blue-600 cursor-pointer transition font-semibold">
                {brand.brand_name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
