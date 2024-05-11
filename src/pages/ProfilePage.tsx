import { Header } from '@/features/Header';
import { CardProfile } from '@/features/profile-user/CardProfile';
import { CardAccount } from '@/features/profile-user/CardAccount';
import { CardNotification } from '@/features/profile-user/CardNotification';
import { HeroProfile } from '@/features/profile-user/HeaderProfileUser';

export default function ProfilePage() {
  return (
    <>
      <Header />
      <HeroProfile />
      <div className="container mx-auto my-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            <CardProfile />
            <CardAccount />
          </div>
          <div className="space-y-8">
            <CardNotification />
          </div>
        </div>
      </div>
    </>
  );
}
