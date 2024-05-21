import { MedalIcon } from '@/components/ui/IconComponents';

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center">
          <MedalIcon className="h-20 w-20 text-black" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
          Paris 2024
        </h1>
        <div className="flex items-center justify-center" />
        <div className="w-full gap-x-2 flex justify-center items-center">
          <div
            className="w-5 bg-blue-600 animate-pulse h-5 rounded-full animate-bounce"
            role="loading"
          ></div>
          <div
            className="w-5 bg-black-600 animate-pulse h-5 bg-white rounded-full animate-bounce"
            role="loading"
          ></div>
          <div
            className="w-5 h-5 animate-pulse bg-red-600 rounded-full animate-bounce"
            role="loading "
          ></div>
        </div>
      </div>
    </div>
  );
}
