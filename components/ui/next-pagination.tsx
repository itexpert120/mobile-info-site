"use client";

import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface NextPaginationProps {
  total_page: number;
  page: number;
  brand_id: number;
}

export default function NextPagination({
  total_page,
  page,
  brand_id,
}: NextPaginationProps) {
  const router = useRouter();
  const handleChange = (page: number) => {
    router.push(`/brands/${brand_id}/${page}`);
  };
  return (
    <Pagination
      showControls
      total={total_page}
      initialPage={page}
      onChange={(NextPage) => handleChange(NextPage)}
    />
  );
}
