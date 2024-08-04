import { Spinner } from "@/components/ui-expansion/spinner";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <Spinner className="my-auto" />
    </div>
  );
};
export default Loading;
