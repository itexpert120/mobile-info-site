import { FiCamera, FiCpu, FiInfo, FiSmartphone } from "react-icons/fi";

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
        <div className="flex items-start">
          <FiSmartphone className="text-3xl mt-2 mr-2 hidden md:block basis-[32px]" />
          <div className="max-w-xs">
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
        </div>
        <div>
          <div className="flex items-start">
            <FiCamera className="text-3xl mt-2 mr-2 hidden md:block basis-[32px]" />
            <div className="max-w-xs">
              <h2 className="font-bold text-lg">Camera</h2>
              <p>
                <span className="font-semibold">Resolution:</span>{" "}
                {deviceDetails.camera}
              </p>
              <p>
                <span className="font-semibold">Video:</span>{" "}
                {deviceDetails.video}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start">
            <FiCpu className="text-3xl mt-2 mr-2 hidden md:block basis-[32px]" />
            <div className="max-w-xs">
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
          </div>
        </div>
        <div>
          <div className="flex items-start">
            <FiInfo className="text-4xl mt-1 mr-2 hidden md:block basis-[32px]" />
            <div className="max-w-xs">
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
                <span className="font-semibold">OS:</span>{" "}
                {deviceDetails.os_type}
              </p>
              {deviceDetails.comment && (
                <p>
                  <span className="font-semibold">Comments:</span>{" "}
                  {deviceDetails.comment}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
