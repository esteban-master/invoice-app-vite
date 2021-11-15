import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Router from './Routes.routes'
const queryClient = new QueryClient()
function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <ReactQueryDevtools />
    // </QueryClientProvider>
    <Router />
  )
}

export default App
