import axios from "axios";

const baseURL =
  "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec";

export default async function getDeviceDetails(
  device_key: string
): Promise<DeviceDetails> {
  const { data: device_details } = await axios.post(baseURL, {
    route: "device-detail",
    key: device_key,
  });

  return device_details.data;
}
