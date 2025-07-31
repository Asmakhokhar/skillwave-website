import React from 'react';

export default function AboutSection() {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16'>
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img
                        src='/Image-01.png'
                        className='w-full max-w-md lg:max-w-none h-auto object-contain'
                        alt='Education illustration'
                    />
                </div>

                <div className='w-full lg:w-1/2 space-y-6'>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight'>
                        All in One Education Solution Makes Your Better Skills
                    </h1>

                    <div className='space-y-4 text-gray-600'>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi ullam corrupti laborum vero dolore vel magni reprehenderit, facere incidunt qui error veniam modi quis nihil repellat ut? Itaque, ratione?
                        </p>
                        <p className='text-lg'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, eius excepturi cumque blanditiis voluptatibus accusamus non animi beatae cum porro?
                        </p>
                    </div>

                    <button
                        onClick={() => window.location.href = '/about'}
                        className="px-6 py-3 bg-gradient-to-r from-[#2ca903] to-[#035470] text-white font-normal rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] shadow-emerald-200 dark:shadow-emerald-900/50"
                    >
                        Read More
                        <span className="ml-2">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}