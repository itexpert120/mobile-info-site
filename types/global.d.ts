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

  interface DeviceList {
    device_name: string;
    device_image: string;
    key: string;
  }

  interface MoreDetails {
    title: string;
    data: string[];
  }

  interface MoreSpecifications {
    title: string;
    data: MoreDetails[];
  }

  interface DeviceDetails {
    key: string;
    device_name: string;
    device_image: string;
    display_size: string;
    display_res: string;
    camera: string;
    video: string;
    ram: string;
    chipset: string;
    battery: string;
    batteryType: string;
    release_date: string;
    body: string;
    os_type: string;
    storage: string;
    comment: string;
    more_specification: MoreSpecifications[];
    pictures: string[];
    more_information: any;
  }
}
