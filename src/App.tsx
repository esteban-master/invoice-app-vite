import { Container } from '@chakra-ui/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Router from './Routes.routes'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Container maxWidth={{ base: 'container.sm', md: 'container.md' }}>
        <Router />
      </Container>
    </QueryClientProvider>
  )
}

export default App
