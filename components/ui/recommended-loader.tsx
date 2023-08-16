export default function RecommendedLoader() {
  const randomData = Array.from({ length: 9 }, (_, index) => index); // Generate an array of indices
  return (
    <div className="flex flex-row gap-4 overflow-auto no-scrollbar">
      {randomData.map((index) => (
        <div
          className="flex-grow-0 flex-shrink-0 w-44 h-44 rounded-md border animate-pulse"
          key={index}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-44 h-44 rounded-md bg-gray-300" />
            <div className="mt-1 w-24 h-4 bg-gray-300 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
