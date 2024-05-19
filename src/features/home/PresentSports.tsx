import placeholderImage from '@/assets/images/PlaceholderParis.svg';
import { Separator } from '@/components/ui/separator';
import { Link } from 'wouter';
export const NewsPresents = () => {
  return (
    <>
      <Separator />
      <section className="py-20 bg-white dark:bg-gray-800 z-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Dernières Nouvelles
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-gray-500">
              Restez à jour avec les dernières nouvelles et mises à jour sur les Jeux Olympiques de
              Paris 2024.
            </p>
          </div>
          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 gap-x-4 gap-y-8 sm:max-w-lg sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  alt="News 1"
                  className="object-cover w-full h-48"
                  height={320}
                  src={placeholderImage}
                  style={{
                    aspectRatio: '480/320',
                    objectFit: 'cover'
                  }}
                  width={480}
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rose-500">
                    <Link className="hover:underline" href="#">
                      Article
                    </Link>
                  </p>
                  <Link className="block mt-2" href="#">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Nouvelles disciplines des Jeux Olympiques de Paris 2024
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Le Comité International Olympique a annoncé l'ajout de plusieurs nouveaux
                      sports aux Jeux Olympiques de Paris 2024.
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="#">
                      <span className="sr-only">Author</span>
                      <img
                        alt="Author 1"
                        className="rounded-full"
                        height={40}
                        src={placeholderImage}
                        style={{
                          aspectRatio: '40/40',
                          objectFit: 'cover'
                        }}
                        width={40}
                      />
                    </Link>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      <Link className="hover:underline" href="#">
                        John Doe
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2023-04-01">1 avr. 2023</time>
                      <span aria-hidden="true">·</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
