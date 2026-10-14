import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShowsList from './pages/ShowsList';
import ShowDetail from './pages/ShowDetail';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shows' element={<ShowsList />}></Route>
        <Route path='/shows/:id' element={<ShowDetail />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}
