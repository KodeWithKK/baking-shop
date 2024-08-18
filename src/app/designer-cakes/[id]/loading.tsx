import AnimatedLoaderIcon from "@/Icons/Loader";

export default function Loading() {
  return (
    <div className="grid h-[calc(100vh-71px)] place-items-center">
      <AnimatedLoaderIcon className="h-12 w-12 text-orange-600" />
    </div>
  );
}
