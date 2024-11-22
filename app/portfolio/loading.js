import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex bg-gray-800 items-center h-screen justify-center">
      <div className="flex flex-col items-center">
        <Spinner />
        <p className="text-xl text-grey-400">Loading data...</p>
      </div>
    </div>
  );
}