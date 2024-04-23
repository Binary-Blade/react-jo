import { TwitterIcon, YoutubeIcon } from "@/assets/icons/IconComponents";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <a className="text-white hover:text-gray-300" href="#">
            <YoutubeIcon className="h-6 w-6" />
            <span className="sr-only">YouTube</span>
          </a>
          <a className="text-white hover:text-gray-300" href="#">
            <TwitterIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <p className="mt-4 md:mt-0 text-sm text-gray-300">© 2024 Paris Olympic Inc. All rights reserved.</p>
      </div>
    </div>
  )
}


