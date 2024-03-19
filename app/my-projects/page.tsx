"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{ backgroundImage: "url(/bg-2.jpg)" }}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='pt-10 sm:pd-0 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%] overflow-auto'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Page