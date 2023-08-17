import { Skeleton } from "./skeleton";

export default function AllBrandsLoader() {
  const allBrands = [...Array(121).fill("...")];
  return (
    <div className="grid grid-cols-2 gap-2 my-2">
      {allBrands.map((_, index) => (
        <div key={index} className="flex flex-row items-center gap-x-2">
          <span className="w-12 h-12 flex items-center justify-center text-center text-white bg-blue-600 rounded-full p-2 text-lg text-bold">
            {index + 1}
          </span>{" "}
          <Skeleton className="w-32 h-8" />
        </div>
      ))}
    </div>
  );
}
