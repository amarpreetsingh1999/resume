// projects: , this website, image recognition of traffic signs, Dev mech services(full stack), youtube clone(current in works) more projects coming soon

import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      {/* <div class="container mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4"> */}
      <div class="flex flex-wrap mt-10 max-w-sm mx-auto">
        <div class="relative group">
          <img
            src="personalWebsite.png "
            alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl" />
          <div
            className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
            <div className="flex-row text-center">
              <h1 className="text-gray-50 font-bold text-lg">This website</h1>
              <Link className='text-gray-200 font-medium text-sm'>Source Code</Link>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="mt-10 max-w-sm mx-auto">
          <div className="relative group">
            <img
              src="imagerec.jpg"
              alt="Photo by Sébastien Goldberg on Unsplash" className="w-full rounded shadow-xl hover:shadow-2xl" />
            <div
              className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div className="flex-row text-center">
              <h1 className="text-gray-50 font-bold text-lg">Image Recognition of Traffic Signs</h1>
              <Link to='https://github.com/amarpreetsingh1999/imageRec' target="_blank" rel="noopener noreferrer" className='text-gray-200 font-medium text-sm'>Source Code</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-sm mx-auto">
          <div class="relative group">
            <img
              src="youtube.jpg"
              alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl" />
            <div
              class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
            </div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div class="flex-row text-center">
              <h1 className="text-gray-50 font-bold text-lg">Youtube Clone</h1>
              <Link to='/resume/projects' className='text-gray-200 font-medium text-sm'>In Development</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 max-w-sm mx-auto mb-10">
          <div class="relative group">
            <img
              src="workinprogress.jpg"
              alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl" />
            <div
              class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
            </div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div class="flex-row text-center">
              <h1 className="text-gray-50 font-bold text-lg">Dev Mechanical Services</h1>
              <Link to='/resume/projects' className='text-gray-200 font-medium text-sm'>In Development</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectsPage