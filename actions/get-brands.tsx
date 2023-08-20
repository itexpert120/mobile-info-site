import axios from "axios";
import { cache } from "react";

export const revalidate = 3600;

const baseURL =
  "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=brand-list";

// export async function getAllBrands(): Promise<Brand[]> {
//   const { data: response } = await axios.get(baseURL);
//   return response.data;
// }

export const getAllBrands = cache(async (): Promise<Brand[]> => {
  const { data: response } = await axios.get(baseURL);
  return response.data;
});

const TOP_BRANDS = ["Samsung", "Apple", "Xiaomi", "Google", "OnePlus", "Oppo"];

// export async function getTopBrands() {
//   const { data: response } = await axios.get(baseURL);
//   const topBrands = response.data.filter((brand: Brand) =>
//     TOP_BRANDS.includes(brand.brand_name)
//   );
//   return topBrands;
// }

export const getTopBrands = cache(async () => {
  const { data: response } = await axios.get(baseURL);
  const topBrands = response.data.filter((brand: Brand) =>
    TOP_BRANDS.includes(brand.brand_name)
  );
  return topBrands;
});
