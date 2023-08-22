"use client";

import Link from "next/link";

import { Image } from "@nextui-org/react";

interface DeviceBoxProps {
  item: RecommendedDevice | DeviceList;
}

export function DeviceBox({ item }: DeviceBoxProps) {
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-40 w-40 h-44 sm:basis-44 sm:w-44 sm:h-44 rounded-md border group">
      <Link href={`/device/${item.key}`}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Image
            src={item.device_image}
            style={{ objectFit: "cover", width: "100px", height: "auto" }}
            alt={item.key}
            className="group-hover:scale-105 transition"
          />
          <p className="text-sm mt-1 font-semibold text-center">
            {item.device_name}
          </p>
        </div>
      </Link>
    </div>
  );
}
