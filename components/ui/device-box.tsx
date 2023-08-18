interface DeviceBoxProps {
  item: RecommendedDevice | DeviceList;
}

export function DeviceBox({ item }: DeviceBoxProps) {
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-44 w-44 h-44 rounded-md border">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <img
          src={item.device_image}
          style={{ objectFit: "cover", width: "100px", height: "auto" }}
          alt={item.key}
        />
        <p className="text-sm mt-1 font-semibold text-center">
          {item.device_name}
        </p>
      </div>
    </div>
  );
}
