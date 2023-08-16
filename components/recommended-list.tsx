import DailyInterests from "./daily-interests";
import InStores from "./in-stores";
import LatestMobiles from "./latest-mobiles";
import TopTen from "./top-ten";

export default function RecommendedDevices() {
  return (
    <>
      <LatestMobiles />
      <InStores />
      <div className="md:grid md:grid-cols-2">
        <DailyInterests />
        <TopTen />
      </div>
    </>
  );
}
