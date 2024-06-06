// Relevant Coursework doesn't fit properly

import React from 'react'
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { FaGraduationCap, FaStackOverflow } from "react-icons/fa";
import { Link } from 'react-router-dom';

const educationObj = [
  {
    id: 1,
    uni: 'University of Liverpool',
    // to: 'https://www.liverpool.ac.uk/',
    coursework:
      'Relevant Coursework: Advanced Algorithmic Techniques, Multi-core and Multi-processor programming, Data Mining and Visualisation, Ontologies and Semantic Web, Privacy and Security',
    date: '2023',
    courseInfo: { title: 'Advanced Computer Science' },
    courseInfoExtra: {
      grade: 'Grade: Distinction',
      title: 'MSc. Advanced Computer Science',
      // href: '#',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    uni: 'Guru Gobind Singh Indraprastha University',
    // to: 'https://www.liverpool.ac.uk/',
    coursework:
      'Relevant Coursework: Compilers, Operating Systems, DBMS',
    date: '2021',
    courseInfo: { title: 'Information Technology'},
    courseInfoExtra: {
      grade: 'Grade: First Class Honours',
      title: 'B.Tech Information Technology',
      // href: '#',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
]

const EducationPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Here's a bit about my educational background <FaGraduationCap className='inline'/></h2>
          <p className="mt-2 leading-8 text-orange-500 font-bold">
            Special Mention: Stack Overflow <FaStackOverflow className='inline'/>
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols- gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {educationObj.map((ed) => (
            <article key={ed.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={ed.datetime} className="text-gray-500 font-bold">
                  {ed.date}
                </time>
                <Link
                  to='/education'
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 hover:text-orange-400"
                >
                  {ed.courseInfo.title}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link className='text-gray-500 font-bold'>
                    <span className="absolute inset-0" />
                    {ed.uni}
                  </Link>      
                              
                </h3>
                <p className="text-gray-500">{ed.courseInfoExtra.title}</p>
                <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">{ed.coursework}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link to={ed.courseInfo.href} className='text-gray-500 hover:text-orange-500'>
                      <span className="absolute inset-0" />
                      {ed.courseInfoExtra.grade}
                    </Link>
                  </p>
                  {/* <p className="text-gray-600">{ed.courseInfo.title}</p> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EducationPage