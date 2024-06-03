"use client";

import { projects } from '../../../data/index';
import { HoverEffect } from './ui/CardHoverEffect';
const Projects = () => {
  return (
    <section className="bg-white dark:bg-gray-900" name="projects">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My Projects</h1>
              <HoverEffect
                items={projects}
              />
          </div>
        </div>
    </section>
  )
}

export default Projects