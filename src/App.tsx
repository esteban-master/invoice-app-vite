import {
  Stack,
  Grid,
  Box,
  GridItem,
  Container,
  Text,
  Icon
} from '@chakra-ui/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Router from './Routes.routes'
const queryClient = new QueryClient()
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useBreakpointValue } from '@chakra-ui/react'
function App() {
  const hiddenArrowRight = useBreakpointValue({ base: true, md: false })
  return (
    // <QueryClientProvider client={queryClient}>
    //   <ReactQueryDevtools />
    // </QueryClientProvider>
    <Router />
  )
}

export default App
