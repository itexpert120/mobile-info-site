import { Skeleton } from "./skeleton";

export function AllDevicesSkeleton() {
  const sampleData = [...Array(30).fill("...")];
  return (
    <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-4 md:gap-4 my-4">
      {sampleData ? (
        sampleData.map((device) => (
          <div
            className="flex-grow-0 flex-shrink-0 basis-40 w-40 h-44 sm:basis-44 sm:w-44 sm:h-44 rounded-md border"
            key={device}
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Skeleton className="w-[100px] h-[100px]" />
              <Skeleton className="mt-4 h-4 w-32" />
            </div>
          </div>
        ))
      ) : (
        <div>No Device Found</div>
      )}
    </div>
  );
}
