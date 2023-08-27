import { useState } from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home'
import Error from './components/Error/Error'
import Projects from './components/MyProjects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
import Nav from './components/Nav/Nav'
import ContactMe from './components/ContactMe/ContactMe'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav />}>
      <Route index element={<Home />} />
      <Route path='projects' element={<Projects />} />
      <Route path='about' element={<AboutMe />} />
      <Route path='contact' element={<ContactMe />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
