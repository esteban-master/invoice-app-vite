import { Container, Stack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <Stack
      height={'95vh'}
      direction={'column'}
      spacing={10}
      justifyContent={'space-between'}
    >
      <Container maxWidth={{ base: 'container.sm', md: 'container.md' }}>
        <Outlet />
      </Container>
    </Stack>
  )
}
