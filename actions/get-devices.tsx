import axios, { all } from "axios";
import { getAllBrands } from "./get-brands";

const baseURL =
  "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec";

export async function GetBrandDetails(
  brand_id: number
): Promise<Brand | undefined> {
  const allBrands = await getAllBrands();
  const filteredBrand = allBrands.find(
    (brand: Brand) => brand.brand_id === brand_id
  );

  return filteredBrand;
}

export async function GetBrandDevices(
  brand_id: number,
  page: number = 1
): Promise<any | undefined> {
  const allBrands = await getAllBrands();
  const filteredBrand = allBrands.find(
    (brand: Brand) => brand.brand_id === brand_id
  );

  const { data: brandDevices } = await axios.post(baseURL, {
    route: "device-list-by-brand",
    brand_id: filteredBrand?.brand_id,
    brand_name: filteredBrand?.brand_name,
    page: page,
  });

  return brandDevices.data;
}
