import placeholderImage from "@/assets/images/PlaceholderParis.svg"
import { Separator } from "../ui/separator"

export default function Events() {
  return (
    <>
      <Separator />
      <section className="w-full py-12 md:py-2 lg:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src={placeholderImage}
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience the
                  <span className="shimmer translate-y-1 inline-block rounded-md bg-rose-500 px-2 py-1 text-rose-50 font-semibold animation duration-300ms ease-in-out">
                    Magic
                  </span>
                  of the Games
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Athletes from around the world will
                  compete in over 300 events across 32 sports. From the thrill of victory to the agony of defeat, the
                  Olympic Games are a celebration of the human spirit.
                </p>
              </div>
              <div className="grid gap-2 min-[400px]:flex-row">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

