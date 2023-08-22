// import Image from "next/image";
"use client";

import { Card, CardFooter, Image } from "@nextui-org/react";

interface BannerProps {
  imgSrc: string;
}

export default function Banner({ imgSrc }: BannerProps) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-cover aspect-video"
        height={"auto"}
        src={imgSrc}
        width={720}
      />
      <CardFooter className="justify-center before:bg-black/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-3xl text-white/80">Latest Smartphone Info</p>
      </CardFooter>
    </Card>
  );
}
