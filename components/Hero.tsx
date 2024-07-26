'use client';
import React from 'react'
import { Spotlight } from './ui/Spotlight';
import Link from 'next/link';
const Hero = () => {
    
    return (
        <div className='relative flex justify-center'>
            <div className="">
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='top-10 left-full  h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
            </div>
            <div className="h-[400px]  w-[60vw] dark:bg-black-100   dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            </div>
            <div className="flex justify-center  absolute top-[50%]  translate-y-[-50%]  z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80vw]">Dynamic web magic with Next.js</h2> */}

                    <Link href='/products' className="sm:px-12  px-6 py-2 sm:py-4 sm:text-2xl text-[12px] rounded-full bg-[#202938bb] font-bold text-white tracking-widest shadow-md uppercase transform hover:scale-105 hover:bg-[#fff] hover:text-[#000] transition-colors duration-200">
                        Explore Our Store
                    </Link>
                     


                </div>
            </div>
        </div>
    )
}

export default Hero



