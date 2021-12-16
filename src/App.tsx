import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { InvoicesContextProvider, useInvoiceContext } from './contextInvoice'
// import { ReactQueryDevtools } from 'react-query/devtools'
import Router from './Routes.routes'

import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'
import addDays from 'date-fns/addDays'

const queryClient = new QueryClient()

function App() {
  console.log(
    format(new Date('2021-08-16'), 'yyyy MM dd', {
      locale: esLocale
    }),
    ' - ',
    format(addDays(new Date('2021-12-16'), 5), 'dd MMM yyyy', {
      locale: esLocale
    })
  )
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
