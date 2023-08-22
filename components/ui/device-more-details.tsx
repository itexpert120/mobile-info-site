interface DeviceMoreDetailsProps {
  moreDetails: MoreSpecifications[];
}
export default function DeviceMoreDetails({
  moreDetails,
}: DeviceMoreDetailsProps) {
  return (
    <>
      <h2 className="text-2xl font-bold my-4">Device Specifications</h2>
      <div className="w-full max-w-3xl mx-auto my-4">
        {moreDetails.map((item) => (
          <div
            key={item.title}
            className="flex flex-col md:flex-row w-full mb-4"
          >
            <div className="md:basis-36 mr-2">
              <h2 className="font-bold text-xl">{item.title}</h2>
            </div>
            <div className="w-full">
              {item.data.map((itemData) => (
                <>
                  <div
                    className="md:ml-4 flex items-center justify-start gap-x-4"
                    key={itemData.title}
                  >
                    <p>
                      <span className="font-semibold">{itemData.title}:</span>{" "}
                      {itemData.data}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
