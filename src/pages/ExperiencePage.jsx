// Put a flipping card there

import React from 'react'

const ExperiencePage = () => {
    return (

        <section className="dark:bg-white dark:text-gray-800 m-10 p-20">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-orange-500">
                            <h3 className="text-2xl font-bold text-gray-500">Work Experience</h3>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-orange-500">
                                <h3 className="text-lg font-bold tracking-wide text-gray-600 hover:text-orange-500">Demonstrator </h3>
                                <p className="text-base font-bold tracking-wide text-gray-400">University of Liverpool </p>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-500 font-semibold mt-1">Oct 2022 - May 2023</time>
                                <p className="mt-3 text-gray-600">Guided students through practical labs, ensuring comprehensive understanding of course material. Proactively resolved student queries, providing timely and effective support for both in-person and online inquiries. Evaluated and graded student assignments, delivering constructive feedback to enhance their performance and comprehension. Orchestrated engaging and interactive lab sessions resulting in heightened student participation and comprehension.</p>
                            </div>

                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-orange-500">
                                <h3 className="text-lg font-bold tracking-wide text-gray-600 hover:text-orange-500">Associate Engineer </h3>
                                <p className="text-base font-bold tracking-wide text-gray-400">Nagarro </p>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-500 font-semibold mt-1">Jun 2021 - Sep 2022</time>
                                <p className="mt-3 text-gray-600">Utilized ASP.NET for robust server-side development and Angular for dynamic client-side interface, delivering a responsive and intuitive user experience.Strategically implemented N-tier architecture to optimize performance and facilitate efficient scalability of the application. Through adept utilization, emphasized user-centric design and performance optimization</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ExperiencePage