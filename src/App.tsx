import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { InvoicesContextProvider, useInvoiceContext } from './contextInvoice'
// import { ReactQueryDevtools } from 'react-query/devtools'
import Router from './Routes.routes'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}

      <InvoicesContextProvider>
        <Router />
      </InvoicesContextProvider>
    </QueryClientProvider>
  )
}

export default App
