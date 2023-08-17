import { cn } from "@/lib/utils";
import Link from "next/link";

interface PaginationProps {
  total_page: number;
  page: number;
  brand_id: number;
}

export default function Pagination({
  total_page,
  page,
  brand_id,
}: PaginationProps) {
  return (
    <div className="flex">
      <Link
        href={page - 1 === 0 ? "#" : `/brands/${brand_id}/${page - 1}`}
        className={cn(
          "flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          page - 1 === 0 && "cursor-not-allowed bg-red-500 text-white"
        )}
      >
        <svg
          className="w-3.5 h-3.5 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </Link>
      <Link
        href={page + 1 <= total_page ? `/brands/${brand_id}/${page - 1}` : "#"}
        className={cn(
          "flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          page === total_page && "cursor-not-allowed bg-red-500 text-white"
        )}
      >
        Next
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}
