import Banner from "@/components/banner";
import BrandsList from "@/components/brands-list";
import RecommendedDevices from "@/components/recommended-list";

export default async function Home() {
  return (
    <main className="max-w-sm sm:max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="min-w-[256px] hidden md:block">
          <BrandsList />
        </div>
        <div className="flex-1 md:flex-auto w-full flex items-center justify-center">
          <Banner imgSrc="/images/iPhone-14.jpg" />
        </div>
      </div>
      <RecommendedDevices />
    </main>
  );
}
