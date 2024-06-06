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
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/activities' element={<ActivitiesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App