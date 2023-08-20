import { getAllBrands } from "@/actions/get-brands";
import { getAllDevices } from "@/actions/get-devices";

export default async function sitemap() {
  const baseURL = process.env.BASE_URL;

  // get all brands
  const brands = await getAllBrands();
  const brandsURL =
    brands.map((brand) => {
      return {
        url: `${baseURL}/brands/${brand.brand_id}/1`,
        lastModified: new Date(),
      };
    }) ?? [];

  const allDevices = await getAllDevices();
  const devicesURL: any = [];

  allDevices.map((brand) => {
    devicesURL.push(
      brand.device_list.map((device) => {
        return {
          url: `${baseURL}/device/${device.key}`.replace(/&/g, "%26"),
          lastModified: new Date(),
        };
      })
    );
  }) ?? [];

  const formattedDeviceURLs = devicesURL.flat();

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/brands`,
      lastModified: new Date(),
    },
    ...brandsURL,
    ...formattedDeviceURLs,
  ];
}
