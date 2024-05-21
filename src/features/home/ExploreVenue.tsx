import placeholderImage from '@/assets/images/card_home.webp';

export const ExploreVenue = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 z-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Découvrez les Jeux Olympiques de Paris 2024
            </h2>
            <p
              className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-semibold text-white 
              bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-rose-600"
            >
              Les Jeux Olympiques d'été de 2024, officiellement connus sous le nom de Jeux de la
              XXXIIIe Olympiade, sont un événement sportif international à venir, prévu du 26
              juillet au 11 août 2024, à Paris, France.
            </p>

            <p className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-semibold text-white bg-rose-500 border border-transparent rounded-md shadow-sm hover:bg-rose-600">
              Paris deviendra la deuxième ville à accueillir les Jeux Olympiques trois fois, après
              Londres. Les Jeux de 2024 marqueront le 100e anniversaire de la dernière fois que
              Paris a accueilli les Jeux Olympiques en 1924.
            </p>
          </div>
          <div>
            <img
              alt="Stade de France"
              className="rounded-lg shadow-lg"
              height={427}
              src={placeholderImage}
              style={{
                aspectRatio: '640/427',
                objectFit: 'cover'
              }}
              width={640}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
