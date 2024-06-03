import ShimmerButton from "./ui/ShimmerButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Contact = () => {
  return (
    <section className="bg-slate-100 dark:bg-gray-900">
        <BackgroundBeams />
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 min-h-screen flex flex-col justify-center">
              <TextGenerateEffect
                className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
                words="Reach out to me today and let&apos;s discuss how I can help you
                achieve your goals."
              />
              <a href="#about">
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