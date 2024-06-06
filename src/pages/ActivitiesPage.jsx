import React from 'react'

// First Place in Yoga Competition (2014)
// student ambassador
// Member of Core Team (Machine Learning), DSC-GTBIT (2018)
// Mentor, Coding Club (2018)

const ActivitiesPage = () => {
  return (
    <div class="flex flex-wrap justify-center mt-10">

      {/* <!-- card 1 --> */}
      <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gradient-to-r from-slate-900 to-slate-700 bg-slate-900 p-8 flex-col">

          <div class="flex items-center mb-3">
            <div
              class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-orange-500 bg-orange-500 text-white flex-shrink-0">
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">International Student Ambassador</h2>
          </div>
          <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
              Held this position within the university of Liverpool facilitating effective provision of guidance and advice to international offer holders through the connect campaign. Conducted guided tours of the University, aiding prospective students and educational agents in exploring campus facilities and resources.
            </p>
          </div>
        </div>
      </div>

      <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gradient-to-r from-slate-900 to-slate-700 bg-slate-900 p-8 flex-col">

          <div class="flex items-center mb-3">
            <div
              class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-orange-500 bg-orange-500 text-white flex-shrink-0">
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Member of the core team (Machine Learning)</h2>
          </div>
          <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
              Organized events as a member of the core team in college and shared ideas with the club as a part of the team.
            </p>
          </div>
        </div>
      </div>

      <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gradient-to-r from-slate-900 to-slate-700 bg-slate-900 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div
              class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-orange-500 bg-orange-500 text-white flex-shrink-0">
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Mentor at Coding Club</h2>
          </div>
          <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
              Took part in the club activities as a mentor and helped students in my university with their programming journey.
            </p>
          </div>
        </div>
      </div>

      <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gradient-to-r from-slate-900 to-slate-700 bg-slate-900 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div
              class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-orange-500 bg-orange-500 text-white flex-shrink-0">
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Yoga</h2>
          </div>
          <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
              Secured first place in the inter-house competition at my school
            </p>
          </div>
        </div>
      </div>


    </div>

  )
}

export default ActivitiesPage