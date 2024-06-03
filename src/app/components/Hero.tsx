import { BackgroundBeams } from "./ui/BackgroundBeams";
import ShimmerButton from "./ui/ShimmerButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-slate-100 dark:bg-gray-900">
      <BackgroundBeams />
        <Spotlight
          fill="purple"
        />
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 min-h-screen flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hello there!</h1>
            <TextGenerateEffect
              className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
              words="I&apos;m Sean, a full-stack developer in training!  I can juggle both front-end and back-end, but I&apos;m still working on some fancy tricks. Let&apos;s build something awesome together!"
            />
            <a href="#about">
              <ShimmerButton 
                title="Check out my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
        </div>
    </section>
  );
}