import axios from "axios";

const baseURL =
  "https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=recommended";

export default async function getRecommended() {
  const { data: fetchedData } = await axios.get(baseURL);
  return fetchedData.data;
}

export async function getLatestDevices(): Promise<
  RecommendedDevice[] | undefined
> {
  const { recommended_1: latestDevices } = await getRecommended();
  if (!latestDevices) {
    return undefined;
  }
  return latestDevices.data as RecommendedDevice[];
}

export async function getShelfDevices(): Promise<
  RecommendedDevice[] | undefined
> {
  const { recommended_2: shelfDevices } = await getRecommended();
  if (!shelfDevices) {
    return undefined;
  }
  return shelfDevices.data as RecommendedDevice[];
}

export async function getDailyInterests(): Promise<HitsDevice[] | undefined> {
  const { recommended_3: dailyInterests } = await getRecommended();
  if (!dailyInterests) {
    return undefined;
  }
  return dailyInterests.data as HitsDevice[];
}

export async function getTopTen(): Promise<HitsDevice[] | undefined> {
  const { recommended_4: topTen } = await getRecommended();
  if (!topTen) {
    return undefined;
  }
  return topTen.data as HitsDevice[];
}
