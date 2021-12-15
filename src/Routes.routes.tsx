import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { Layout } from './components/Layout'
import { MenuNavbar } from './components/MenuNavbar'
import { Home } from './pages/Home'
import { Invoice } from './pages/Invoice'
import CreateInvoice from './components/CreateInvoice'
import CreateInvoicePage from './pages/CreateInvoice'
import { Link } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Grid templateColumns={{ base: '1fr', lg: '103px repeat(11, 1fr)' }}>
        <GridItem colSpan={1}>
          <MenuNavbar />
        </GridItem>
        <GridItem paddingTop={12} colSpan={11}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route index element={<Tetas />} /> */}
              <Route path="/invoice/:id" element={<Invoice />} />
              <Route path="/invoice/new" element={<CreateInvoicePage />} />

              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </GridItem>
      </Grid>
    </BrowserRouter>
  )
}
const NoMatch = () => {
  return <p>There's nothing here: 404!</p>
}
