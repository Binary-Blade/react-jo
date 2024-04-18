import { Link } from 'wouter'
import imageParis from '../../assets/images/BG-Jo.jpg'

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-2 lg:py-10">
      <div className="container grid items-start gap-6 px-4 text-center lg:grid-cols-2 lg:gap-10 lg:text-left xl:gap-16 xl:px-6">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="space-y-2 py-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Experience the 2024 Olympics in Paris
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Be part of history as the world comes together to celebrate the spirit of sportsmanship in the
              beautiful city of Paris.
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/offers"
          >
            Reserve Tickets
          </Link>
        </div>
        <img
          alt="Olympic Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last lg:aspect-video"
          height="310"
          src={imageParis}
          width="550"
        />
      </div>
    </section>
  )
}

// function ChevronRightIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m9 18 6-6-6-6" />
//     </svg>
//   )
// }

export default Hero
