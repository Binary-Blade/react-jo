import imageParis from '../../assets/images/BG-Jo.jpg';
import { useAuthStore } from '@/stores/useAuthStore';
import { TicketButton } from '../common/buttons/TicketButton';
import { useLocation } from 'wouter';

const Hero = () => {
  const [, navigate] = useLocation();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-6 text-center grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-16">
        <img
          alt="Olympic Image"
          className="mx-auto w-full h-auto mb-10 lg:mb-0 lg:order-2 rounded-xl object-cover object-center"
          src={imageParis}
        />
        <div className="flex flex-col items-center lg:items-center justify-center space-y-4 lg:order-1">
          <div className="space-y-2 py-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Experience the 2024 Olympics in Paris
            </h1>
            <p className="max-w-xl mx-auto text-gray-500 md:text-xl lg:text-lg xl:text-xl dark:text-gray-400">
              Be part of history as the world comes together to celebrate the spirit of sportsmanship in the beautiful city of Paris.
            </p>
          </div>
          <div className="flex justify-center gap-7 w-full">
            {!isAuthenticated ? (
              <>
                <TicketButton
                  className="w-32"
                  variant="default"
                  isLoading={false}
                  text="Signup"
                  onClick={() => handleNavigation('/signup')}
                />
                <TicketButton
                  className="w-32"
                  variant="default"
                  isLoading={false}
                  text="Login"
                  onClick={() => handleNavigation('/login')}
                />
              </>
            ) : (
              <>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
