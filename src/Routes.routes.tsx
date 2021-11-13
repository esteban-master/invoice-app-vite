import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MenuNavbar } from './components/MenuNavbar'
import { Home } from './pages/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <MenuNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
