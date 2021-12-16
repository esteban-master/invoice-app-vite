import React from 'react'
import { Grid, GridItem, Spinner } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { Layout } from './components/Layout'
import { MenuNavbar } from './components/MenuNavbar'
import { Home } from './pages/Home'
import { Invoice } from './pages/Invoice'

// import CreateInvoicePage from './pages/CreateInvoice'

const CreateInvoicePage = React.lazy(() => import('./pages/CreateInvoice'))

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
              <Route
                path="/invoice/new"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <CreateInvoicePage />
                  </React.Suspense>
                }
              />
              {/* <Route path="/invoice/new" element={<CreateInvoicePage />} /> */}

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
