import { Skeleton } from "./skeleton";

export async function ListLoader() {
  const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul id="daily-interests" className="flex flex-col gap-y-4">
      {sampleData.map((item) => (
        <li className="flex items-center" key={item}>
          <span className="basis-12 text-center text-white bg-blue-600 rounded-full p-2 text-lg text-bold">
            {item}
          </span>{" "}
          <div className="flex items-center gap-x-2">
            <Skeleton className="ml-4 w-48 h-8" />
          </div>
        </li>
      ))}
    </ul>
  );
}
