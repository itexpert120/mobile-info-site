import { FiSmartphone } from "react-icons/fi";
import { Skeleton } from "./skeleton";

export default function BrandsLoader() {
  const SKELETON = ["...", "...", "...", "...", "...", "..."];
  return SKELETON.map((item, index) => (
    <li
      key={index}
      className="border p-2 rounded-md shadow-sm hover:shadow-lg transition"
    >
      <div className="flex flex-row gap-x-2 items-center">
        <FiSmartphone className="text-xl" />
        <Skeleton className="w-[128px] h-[24px] rounded-md" />
      </div>
    </li>
  ));
}
