export {};

declare global {
  interface Brand {
    brand_id: number;
    brand_name: string;
    key: string;
  }

  interface RecommendedDevice {
    device_name: string;
    device_image: string;
    key: string;
  }

  interface HitsDevice {
    no: number;
    device_name: string;
    daily_hits: number;
    key: string;
  }
}
