import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import SerialsPage from './pages/SerialsPage'
import ActorsPage from './pages/ActorsPage'
import MorePage from './pages/MorePage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}>Home</Route>
      <Route path='/FilmsPage' element={<FilmsPage/>}>Filmy</Route>
      <Route path='/SerialsPage' element={<SerialsPage/>}>Seriale</Route>
      <Route path='/ActorsPage' element={<ActorsPage/>}>Aktorzy</Route>
      <Route path='/MorePages' element={<MorePage/>}>Więcej</Route>
      

    </Routes>

    </BrowserRouter> 

  )
}

export default App
