import { Separator } from '@/components/ui/separator';
import { Link } from 'wouter';

export const SectionTickets = () => {
  return (
    <>
      <Separator />
      <section className="w-full py-12 z-8">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/leading-tight">
              Obtenez vos billets
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ne manquez pas l'occasion de faire partie de l'histoire. Obtenez vos billets pour les
              Jeux Olympiques de Paris 2024 dès aujourd'hui.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link
              className="inline-flex h-10 items-center rounded-md 
                            bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors 
                            hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 
                            dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/events"
            >
              Obtenir des billets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
