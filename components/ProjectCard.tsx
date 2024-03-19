"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';

interface Props {
    image: string;
    title: string;
    text: string;
    link: string;
}

const ProjectCard = ({ image, title, text, link}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='w-[350px] sm:w-[450px] h-[180px] sm:h-[280px] rounded-md cursor-pointer'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    Learn more &gt;
                    </div>
            </div>
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]'/>
                  <div className='flex flex-col gap-20 py-3 z-[30]'>
                    <div className='flex justify-between'>
                    <h1 className='text-white text-[20px] sm:text-2xl font-semibold -mb-14 sm:mb-0'>{title}</h1>
                    <a href={link} target='_blank' className='text-white text-[15px] sm:text-[20px]'>
                        <Image
                            src="/github.svg"
                            alt="github"
                            width={28}
                            height={28}
                        />    
                    </a>
                    </div>
                    <p className='text-gray-200 text-[15px] sm:text-[20px]'>
                        {text}
                    </p>
                  </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectCard