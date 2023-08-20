interface DevicePicturesProps {
  pictures: string[];
}

export default function DevicePictures({ pictures }: DevicePicturesProps) {
  return (
    <>
      <h2 className="text-2xl font-bold my-4">Pictures</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-4">
        {pictures[0] ? (
          <img src={pictures[0]} className="max-w-sm max-h-96 object-cover" />
        ) : (
          "No Pictures"
        )}
        {pictures[1] && (
          <img src={pictures[1]} className="max-w-sm max-h-96 object-cover" />
        )}
      </div>
    </>
  );
}
