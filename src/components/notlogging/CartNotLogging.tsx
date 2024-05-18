import { Link } from 'wouter';
import { UserIcon } from '../ui/IconComponents';
import { Header } from '@/features/header/Header';

export const CartNotLogging = () => (
  <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="container flex flex-col items-center justify-center gap-6 text-center">
        <UserIcon className="h-16 w-16" />
        <h1 className="text-4xl font-bold">You are not logged in</h1>
        <p className="max-w-lg text-gray-500 dark:text-gray-400">
          To access your cart and continue shopping, please log in or create an account.
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/auth"
        >
          Log in
        </Link>
      </div>
    </main>
  </>
);
