import ShimmerButton from "./ui/ShimmerButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Contact = () => {
  return (
    <section className="w-full bg-slate-100 dark:bg-gray-900" id="contact">
      {/* background grid */}
      {/* w-full min-h-96 bg-[url('/footer-grid.svg')] bg-bottom bg-no-repeat bg-opacity-50 */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}
      <div className="flex flex-col items-center justify-center bg-[url('/footer-grid.svg')] bg-bottom bg-no-repeat bg-opacity-50 min-h-96">
        <TextGenerateEffect
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
          words="Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals."
        />
        <a href="mailto:seanchuatech@gmail.com">
          <ShimmerButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  )
}

export default Contact