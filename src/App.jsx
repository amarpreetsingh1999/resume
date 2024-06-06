import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import EducationPage from './pages/EducationPage'
import ExperiencePage from './pages/ExperiencePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ActivitiesPage from './pages/ActivitiesPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/resume' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/resume/education' element={<EducationPage />} />
        <Route path='/resume/experience' element={<ExperiencePage />} />
        <Route path='/resume/skills' element={<SkillsPage />} />
        <Route path='/resume/projects' element={<ProjectsPage />} />
        <Route path='/resume/activities' element={<ActivitiesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App