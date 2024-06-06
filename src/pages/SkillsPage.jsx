// frontend- React, html, css, javascript
//backend- node, express
// object oriented prolly needs to go on top- python, c++, javascript

import React from 'react'

const SkillsPage = () => {
  return (
    <>
      {/* <!-- Image Gallery Basic 1 --> */}
      <div className="container px-10 py-8 mx-auto items-center">

      <h3 className="p-4 text-3xl text-gray-500 font-bold">Languages</h3>
        <div className="flex flex-wrap mb-16">
          <div className="lg:w-1/5 sm:w-1/2 p-2 ">
            <div className="flex relative">
              <img
                src="/python.png"
                alt="React"
                className="inset-0 h-28 w-29 object-cover object-center rounded-lg opacity-75 hover:opacity-100">
              </img>
            </div>
          </div>
          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/cpp.png"
                alt="HTML"
                className="inset-0 h-28.5 w-28 object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>

          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/js.png"
                alt="HTML"
                className="inset-0 h-28 w-28 object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>
        </div>


        <hr class="h-px my-3 bg-orange-200 border-0 dark:bg-orange-200"></hr>



        <h3 className="p-4 text-3xl text-gray-500 font-bold">Front-end</h3>
        <div className="flex flex-wrap mb-16">
          <div className="lg:w-1/5 sm:w-1/2 p-2 ">
            <div className="flex relative">
              <img
                src="/images.png"
                alt="React"
                className="inset-0 h-28 w-29 object-cover object-center rounded-lg opacity-75 hover:opacity-100">
              </img>
            </div>
          </div>
          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/HTML5_logo_and_wordmark.svg.png"
                alt="HTML"
                className="inset-0 h-28 w-28 object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>
          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/CSS3_logo_and_wordmark.svg.png"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-28 w-22 object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>
        </div>


        <hr class="h-px my-8 bg-orange-200 border-0 dark:bg-orange-200"></hr>

        <h3 className="p-4 text-3xl text-gray-500 font-bold">Backend</h3>
        <div className="flex flex-wrap mb-16">
          <div className="lg:w-1/5 sm:w-1/2 p-2 ">
            <div className="flex relative">
              <img
                src="/2560px-Node.js_logo.svg.png"
                alt="React"
                className="inset-0 h-28 w-29 object-cover object-center rounded-lg opacity-75 hover:opacity-100">
              </img>
            </div>
          </div>
          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/express.png"
                alt="HTML"
                className="inset-0 h-28 w-full object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>

          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/NET_Core_Logo.svg.png"
                alt="HTML"
                className="inset-0 h-28 w-28 object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>
        </div>

        <hr class="h-px my-8 bg-orange-200 border-0 dark:bg-orange-200"></hr>


        <h3 className="p-4 text-3xl text-gray-500 font-bold">Database</h3>
        <div className="flex flex-wrap mb-16">
          <div className="lg:w-1/5 sm:w-1/2 p-2 ">
            <div className="flex relative">
              <img
                src="/mongo.png"
                alt="React"
                className="inset-0 h-28 w-29 object-cover object-center rounded-lg opacity-75 hover:opacity-100">
              </img>
            </div>
          </div>
          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/mysql-logo.svg"
                alt="HTML"
                className="inset-0 h-28 w-full object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>
        </div>

        <hr class="h-px my-8 bg-orange-200 border-0 dark:bg-orange-200"></hr>


        <h3 className="p-4 text-3xl text-gray-500 font-bold">Machine Learning</h3>
        <div className="flex flex-wrap mb-16">
          <div className="lg:w-1/5 sm:w-1/2 p-2 ">
            <div className="flex relative">
              <img
                src="/TensorFlow_logo.svg.png"
                alt="React"
                className="inset-0 h-28 w-29 object-cover object-center rounded-lg opacity-75 hover:opacity-100">
              </img>
            </div>
          </div>
          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/pytorch.png"
                alt="HTML"
                className="inset-0 h-28 w-full object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>

          <div className="lg:w-1/5 sm:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="/sklearn.png"
                alt="HTML"
                className="inset-0 h-28 w-full object-cover object-center rounded-lg opacity-75 hover:opacity-100 "></img>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default SkillsPage