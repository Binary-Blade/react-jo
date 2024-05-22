import { MedalIcon } from '@/components/ui/IconComponents';

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center">
          <MedalIcon className="h-20 w-20 text-rose-600" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
          Paris 2024
        </h1>
        <div className="flex items-center justify-center" />
        <div className="w-full gap-x-2 flex justify-center items-center">
          <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:.7s]" />
          <div className="w-4 h-4 rounded-full bg-gray-900 animate-bounce [animation-delay:.3s]" />
          <div className="w-4 h-4 rounded-full bg-rose-600 animate-bounce [animation-delay:.7s]" />
        </div>
      </div>
    </div>
  );
}
