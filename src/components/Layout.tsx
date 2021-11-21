import { Container, Stack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { ButtonsInvoice } from './ButtonsInvoice'

export const Layout: React.FC = () => {
  const location = useLocation()
  const { id } = useParams()
  const isMobile = useBreakpointValue({ base: true, md: false })
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

      {location.pathname.includes('/invoice/') && isMobile ? (
        <ButtonsInvoice padding={5} id={id!} />
      ) : null}
    </Stack>
  )
}
