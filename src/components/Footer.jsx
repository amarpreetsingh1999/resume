import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
    return (

        // <div class="min-h-screen flex flex-col justify-between">
            // <section class="flex-grow"></section>
            <footer className="bg-gradient-to-r from-slate-500 to-slate-800 shadow dark:bg-slate-500 sticky">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {(new Date().getFullYear())} <Link to="/" className="hover:underline">Made with <FaHeart className='inline' /> by Amarpreet Singh</Link>.
                    </span>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Find the source code for this website at ______.
                    </span>
                </div>
            </footer>
        // </div> 

    )
}

export default Footer