import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { MenuNavbar } from './components/MenuNavbar'
import { Home } from './pages/Home'
import { Invoice } from './pages/Invoice'

export default function Router() {
  return (
    <BrowserRouter>
      <MenuNavbar />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const NoMatch = () => {
  return <p>There's nothing here: 404!</p>
}
