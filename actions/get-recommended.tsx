import axios from "axios";

const baseURL =
  "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=recommended";

export default async function getRecommended() {
  const { data: fetchedData } = await axios.get(baseURL);
  return fetchedData.data;
}

export async function getLatestDevices(): Promise<RecommendedDevice[]> {
  const { recommended_1: latestDevices } = await getRecommended();
  return latestDevices.data;
}

export async function getShelfDevices(): Promise<RecommendedDevice[]> {
  const { recommended_2: shelfDevices } = await getRecommended();
  return shelfDevices.data;
}

export async function getDailyInterests(): Promise<HitsDevice[]> {
  const { recommended_3: dailyInterests } = await getRecommended();
  return dailyInterests.data;
}

export async function getTopTen(): Promise<HitsDevice[]> {
  const { recommended_4: topTen } = await getRecommended();
  return topTen.data;
}
