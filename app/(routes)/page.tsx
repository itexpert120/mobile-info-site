import Banner from "@/components/banner";
import BrandsList from "@/components/brands-list";
import Heading from "@/components/heading";
import RecommendedDevices from "@/components/recommended-list";

export default async function Home() {
  return (
    <main className="max-w-sm sm:max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-x-4 my-4">
        <div className="md:min-w-[256px] min-w-full">
          <Heading title="Top Brands" />
          <BrandsList />
        </div>
        <div className="flex-1 md:flex-auto w-full flex items-center justify-center">
          <Banner imgSrc="/images/phones.png" />
        </div>
      </div>
      <RecommendedDevices />
    </main>
  );
}
