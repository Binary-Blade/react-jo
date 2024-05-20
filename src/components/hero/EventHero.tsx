import placeholderImage from '@/assets/images/bg_image2.webp';

export const EventHero = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      <img
        alt="Olympic Games"
        className="w-full h-48 object-cover "
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
