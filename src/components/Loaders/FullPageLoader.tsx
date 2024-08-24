import { LoaderIcon2 } from "@/Icons/Loader";

export default function FullPageLoader() {
  return (
    <div className="grid h-[calc(100vh-71px)] place-items-center">
      <LoaderIcon2 className="h-12 w-12 origin-center animate-spin text-orange-600" />
    </div>
  );
}
