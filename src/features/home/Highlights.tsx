import { GenericTitle } from '@/components/hero/GenericTitle';
import { FlameIcon, MedalIcon } from '@/components/ui/IconComponents';
import { Separator } from '@/components/ui/separator';

export const Highlights = () => {
  return (
    <>
      <Separator />
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2 ">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Highlights
              </div>
              <GenericTitle
                title="Witness History in the Making"
                subtitle="The Olympic Games are a celebration of human achievement, bringing together the world's finest athletes to compete on the grandest stage."
                titleClass="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100"
                subtitleClass="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              />
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <MedalIcon className="w-12 h-12 text-blue-500" />
                <h3 className="text-lg font-bold">Medal Moments</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Watch as records are broken and legends are born.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FlameIcon className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">Opening Ceremony</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Experience the spectacle of the opening ceremony.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FlameIcon className="w-12 h-12 text-rose-500" />
                <h3 className="text-lg font-bold">Closing Celebration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Join the celebration as the games come to an end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
