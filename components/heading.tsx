"use client";

import { useRouter } from "next/navigation";

import { FiArrowLeft } from "react-icons/fi";

interface HeadingProps {
  title: string;
  showBackArrow?: boolean;
  back_url?: string;
}

export default function Heading({
  title,
  showBackArrow,
  back_url,
}: HeadingProps) {
  const router = useRouter();
  const handleBack = () => {
    if (back_url) {
      router.push(back_url);
    } else {
      router.back();
    }
  };
  return (
    <div className="flex gap-x-2 items-center my-4">
      {showBackArrow && (
        <FiArrowLeft
          className="text-3xl hover:-translate-x-2 transition hover:text-blue-600 cursor-pointer"
          onClick={handleBack}
        />
      )}
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
}
