import placeholderImage from '@/assets/images/crop_bg.webp';

export const EventHero = () => (
  <div className="bg-white shadow-md overflow-hidden">
    <div className="relative">
      <img
        alt="Olympic Games"
        className="w-full h-48 object-cover aspect-h-9"
        height={360}
        src={placeholderImage}
        style={{
          aspectRatio: '640/360',
          objectFit: 'cover'
        }}
        width={640}
      />
      <div className="absolute top-4 left-4 bg-gray-900 text-white bg-rose-500 px-3 py-1 rounded-full text-xs ">
        Paris 2024
      </div>
    </div>
  </div>
);
