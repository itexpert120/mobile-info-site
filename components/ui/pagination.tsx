"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

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
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  router.prefetch(`/brands/${brand_id}/${page - 1}`);
  router.prefetch(`/brands/${brand_id}/${page + 1}`);

  const handleBack = () => {
    if (page - 1 === 0) {
      return;
    }
    router.push(`/brands/${brand_id}/${page - 1}`);
  };

  const handleForward = () => {
    if (page + 1 === total_page) {
      return;
    }
    router.push(`/brands/${brand_id}/${page + 1}`);
  };
  return (
    <div className="flex">
      <button
        disabled={page - 1 === 0}
        onClick={handleBack}
        className={cn(
          "flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          page - 1 === 0 &&
            "cursor-not-allowed bg-red-500 text-white hover:bg-red-500 hover:text-white"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </button>
      <button
        onClick={handleForward}
        disabled={page === total_page}
        className={cn(
          "flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          page === total_page &&
            "cursor-not-allowed bg-red-500 text-white hover:bg-red-500 hover:text-white"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
}
