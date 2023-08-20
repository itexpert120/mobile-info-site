import axios from "axios";
import { Underdog } from "next/font/google";

const baseURL =
  "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec";

export default async function getDeviceDetails(
  device_key: string
): Promise<DeviceDetails | undefined> {
  const { data: device_details } = await axios.post(baseURL, {
    route: "device-detail",
    key: device_key,
  });

  if (!device_details) {
    return undefined;
  }

  return device_details.data;
}
