// import Image from "next/image";

interface BannerProps {
  imgSrc: string;
}

export default function Banner({ imgSrc }: BannerProps) {
  return (
    <div className="m-4 md:mr-4 rounded-md relative flex flex-col items-center mx-auto my-4 md:my-0">
      <h1 className="z-50 absolute bottom-5 text-white font-bold text-xl sm:text-2xl md:text-3xl bg-black px-8 py-4 rounded-lg">
        Latest Smartphone Info
      </h1>
      <img
        src={imgSrc}
        alt="iPhone 14"
        className="w-[720px] h-[405px] rounded-md aspect-video object-cover shadow-md mx-auto md:mx-0"
      />
    </div>
  );
}
