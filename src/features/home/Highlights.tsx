import { GenericTitle } from '@/components/hero/GenericTitle';
import { FlameIcon, MedalIcon } from '@/components/ui/IconComponents';
import { Separator } from '@/components/ui/separator';

/**
 * `Highlights` component displays a section of highlights for the Olympics.
 * It includes a title, subtitle, and three highlighted moments such as medal moments,
 * the opening ceremony, and the closing celebration.
 *
 * @component
 * @returns {JSX.Element} The rendered highlights section component.
 *
 * @example
 * return (
 *   <Highlights />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and includes several custom components and icons:
 * - `GenericTitle` for displaying the title and subtitle.
 * - `MedalIcon`, `FlameIcon` for the icons representing different highlights.
 * - `Separator` for visual separation of sections.
 */
export const Highlights = (): JSX.Element => {
  return (
    <>
      <Separator />
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              {/* Section title */}
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Moments forts
              </div>
              <GenericTitle
                title="Assistez à l'Histoire en Marche"
                subtitle="Les Jeux Olympiques sont une célébration des réalisations humaines, réunissant les meilleurs athlètes du monde pour concourir sur la plus grande scène."
                titleClass="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100"
                subtitleClass="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              />
            </div>

            {/* Highlighted moments */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <MedalIcon className="w-12 h-12 text-blue-500" />
                <h3 className="text-lg font-bold">Moments de médaille</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Regardez les records se briser et les légendes naître.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FlameIcon className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">Cérémonie d'ouverture</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Vivez le spectacle de la cérémonie d'ouverture.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FlameIcon className="w-12 h-12 text-rose-500" />
                <h3 className="text-lg font-bold">Célébration de clôture</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Participez à la célébration de la clôture des jeux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
