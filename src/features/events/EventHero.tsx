import heroEventImage from '@/assets/images/GamesTicketOptions.svg';

export const EventHero = () => (
    <div className="relative">
        <img
            alt="Olympic Games"
            className="w-full h-48 object-cover"
            height={360}
            src={heroEventImage}
            style={{
                aspectRatio: "640/360",
                objectFit: "cover",
            }}
            width={640}
        />
        <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs">Paris 2024</div>
    </div>
);
