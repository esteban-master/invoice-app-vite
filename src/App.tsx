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
        {/* <Componente /> */}
      </InvoicesContextProvider>
    </QueryClientProvider>
  )
}

const Componente = () => {
  const { invoices, deleteInvoice, markAsPaid } = useInvoiceContext()
  console.log('invoices: ', invoices, deleteInvoice)
  return (
    <div>
      {invoices.map((i) => (
        <li key={i.id}>
          {' '}
          {i.clientName} - {i.status} -
          <button onClick={() => deleteInvoice(i.id)}>Delete</button>{' '}
          <button
            disabled={i.status === 'paid'}
            onClick={() => markAsPaid(i.id)}
          >
            Mark as paid
          </button>{' '}
        </li>
      ))}
    </div>
  )
}

export default App
