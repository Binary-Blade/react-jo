import { Skeleton } from '@/components/ui/skeleton';
import { Header } from '@/features/header/Header';
import { EventHero } from '../hero/EventHero';
import { GenericTitle } from '../hero/GenericTitle';
import { Separator } from '@radix-ui/react-dropdown-menu';

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

function SkeletonCheckoutSummary() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-full rounded-md" />
      <Skeleton className="h-4 w-3/4 rounded-md" />
      <Skeleton className="h-4 w-1/2 rounded-md" />
      <Skeleton className="h-4 w-1/4 rounded-md" />
    </div>
  );
}

export function SkeletonCheckoutPage() {
  return (
    <>
      <Header />
      <EventHero />
      <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8">
        <GenericTitle
          title="Chargement..."
          titleClass="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100"
          subtitleClass="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {[...Array(3)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
        <Separator className="my-12" />
        <div className="grid md:grid-cols-2 gap-8">
          <SkeletonCheckoutSummary />
          <div className="grid gap-4">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </div>
    </>
  );
}
