import React from 'react';

export default function ContactSection() {
    return (
        <section className='bg-white dark:bg-gray-900 text-black dark:text-white py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-3xl sm:text-4xl text-center text-[#000000] font-semibold mb-3'>
                    Contact Us
                </h1>
                <div className="w-24 h-1 bg-[#2ca903] mx-auto mb-12"></div>

                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                    {/* Contact Form */}
                    <div className='w-full lg:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg'>
                        <h2 className='text-xl sm:text-2xl font-medium mb-6 text-gray-800 dark:text-white'>
                            Send us a message
                        </h2>

                        <form className='space-y-4'>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Your Name'
                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2ca903] dark:bg-gray-700 dark:text-white'
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder='Your Email'
                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2ca903] dark:bg-gray-700 dark:text-white'
                                    required
                                />
                            </div>

                            <div>
                                <textarea
                                    placeholder='Your Message'
                                    rows={5}
                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2ca903] dark:bg-gray-700 dark:text-white'
                                    required
                                />
                            </div>

                            <button
                                onClick={() => window.location.href = '#contact'}
                                className="px-6 py-3 bg-gradient-to-r from-[#2ca903] to-[#035470] text-white font-normal rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] shadow-emerald-200 dark:shadow-emerald-900/50"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className='w-full lg:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg'>
                        <h2 className='text-xl sm:text-2xl font-medium mb-6 text-gray-800 dark:text-white'>
                            Contact Information
                        </h2>

                        <div className='space-y-5'>
                            <div>
                                <h3 className='text-lg font-medium text-gray-700 dark:text-gray-300 mb-2'>
                                    General Inquiries
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400'>
                                    Have questions? We're here to help!
                                </p>
                            </div>

                            <div className='space-y-4'>
                                <div className='flex items-start gap-3'>
                                    <svg className="w-5 h-5 mt-1 text-[#2ca903]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className='text-gray-600 dark:text-gray-400'>
                                        contactus.skillwave@gmail.com
                                    </span>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <svg className="w-5 h-5 mt-1 text-[#2ca903]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className='text-gray-600 dark:text-gray-400'>
                                        +92 123 456 7890
                                    </span>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <svg className="w-5 h-5 mt-1 text-[#2ca903]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className='text-gray-600 dark:text-gray-400'>
                                        Rahim Yar Khan, Punjab, Pakistan
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}