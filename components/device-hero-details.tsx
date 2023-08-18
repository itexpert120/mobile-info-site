interface DeviceHeroProps {
  deviceDetails: DeviceDetails;
}

export default function DeviceHeroDetails({ deviceDetails }: DeviceHeroProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-8 justify-center">
      <div className="basis-64">
        <img src={deviceDetails.device_image} alt={deviceDetails.key} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-bold text-lg">Display</h2>
          <p>
            <span className="font-semibold">Size:</span>{" "}
            {deviceDetails.display_size}
          </p>
          <p>
            <span className="font-semibold">Resolution:</span>{" "}
            {deviceDetails.display_res}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Camera</h2>
          <p>
            <span className="font-semibold">Resolution:</span>{" "}
            {deviceDetails.camera}
          </p>
          <p>
            <span className="font-semibold">Video:</span> {deviceDetails.video}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Internals</h2>
          <p>
            <span className="font-semibold">RAM:</span> {deviceDetails.ram}
          </p>
          <p>
            <span className="font-semibold">Storage:</span>{" "}
            {deviceDetails.storage}
          </p>
          <p>
            <span className="font-semibold">Chipset:</span>{" "}
            {deviceDetails.chipset}
          </p>
          <p>
            <span className="font-semibold">Battery Capacity:</span>{" "}
            {deviceDetails.battery}
          </p>
          <p>
            <span className="font-semibold">Battery Type:</span>{" "}
            {deviceDetails.batteryType}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg">More Information</h2>
          <p>
            <span className="font-semibold">Release:</span>{" "}
            {deviceDetails.release_date}
          </p>
          <p>
            <span className="font-semibold">Dimentions:</span>{" "}
            {deviceDetails.body}
          </p>
          <p>
            <span className="font-semibold">OS:</span> {deviceDetails.os_type}
          </p>
          <p>{deviceDetails.comment}</p>
        </div>
      </div>
    </div>
  );
}
