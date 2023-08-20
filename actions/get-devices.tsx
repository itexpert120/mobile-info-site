import axios from "axios";
import { getAllBrands } from "./get-brands";
import { cache } from "react";

export const revalidate = 3600;

const baseURL =
  "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec";

// export async function getAllDevices(): Promise<BrandDevices[]> {
//   const { data: allDevices } = await axios(
//     "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=device-list"
//   );

//   return allDevices.data;
// }

export const getAllDevices = cache(async (): Promise<BrandDevices[]> => {
  const { data: allDevices } = await axios(
    "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=device-list"
  );

  return allDevices.data;
});

// export async function GetBrandDetails(
//   brand_id: number
// ): Promise<Brand | undefined> {
//   const allBrands = await getAllBrands();
//   const filteredBrand = allBrands.find(
//     (brand: Brand) => brand.brand_id === brand_id
//   );

//   return filteredBrand;
// }

export const GetBrandDetails = cache(
  async (brand_id: number): Promise<Brand | undefined> => {
    const allBrands = await getAllBrands();
    const filteredBrand = allBrands.find(
      (brand: Brand) => brand.brand_id === brand_id
    );

    return filteredBrand;
  }
);

// export async function GetBrandDevices(
//   filteredBrand: Brand,
//   page: number = 1
// ): Promise<any | undefined> {
//   const { data: brandDevices } = await axios.post(baseURL, {
//     route: "device-list-by-brand",
//     brand_id: filteredBrand?.brand_id,
//     brand_name: filteredBrand?.brand_name,
//     page: page,
//   });

//   return brandDevices.data;
// }

export const GetBrandDevices = cache(
  async (filteredBrand: Brand, page: number = 1): Promise<any> => {
    const { data: brandDevices } = await axios.post(baseURL, {
      route: "device-list-by-brand",
      brand_id: filteredBrand?.brand_id,
      brand_name: filteredBrand?.brand_name,
      page: page,
    });

    return brandDevices.data;
  }
);
