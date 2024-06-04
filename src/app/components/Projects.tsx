"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from '../../../data/index';
import { PinContainer } from './ui/PinContainer';
import { HoverEffect } from './ui/CardHoverEffect';
const Projects = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Projects</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mx-auto max-w-screen-2xl">
        <HoverEffect
          items={projects}
        />
      </div>
    </section>
  )
}

export default Projects