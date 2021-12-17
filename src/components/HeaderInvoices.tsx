import React from 'react'
import {
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Icon,
  useDisclosure,
  Spinner
} from '@chakra-ui/react'
import { Invoice } from '../interfaces'
import { FilterByStatus } from './FilterByStatus'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useInvoiceContext } from '../contextInvoice'
import { useNavigate } from 'react-router-dom'
const CreateInvoice = React.lazy(() => import('./CreateInvoice'))

export const HeaderInvoices = () => {
  const { invoices } = useInvoiceContext()
  const navigate = useNavigate()

  const hidden = useBreakpointValue({ base: true, md: false })
  const drawerCreateInvoiceDiclosure = useDisclosure()

  function handleCreateInvoice() {
    if (hidden) {
      navigate('/invoice/new')
    } else {
      drawerCreateInvoiceDiclosure.onOpen()
    }
  }

  return (
    <Stack
      my={6}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Stack spacing={0}>
        <Heading fontSize={'3xl'}>Invoices</Heading>
        <Text fontSize={'xs'}>
          {hidden
            ? invoices.length > 0
              ? `${invoices.length} invoices`
              : 'No invoices'
            : invoices.length > 0
            ? `There are ${invoices.length} total invoices`
            : 'No invoices'}
        </Text>
      </Stack>

      <Stack direction={'row'} spacing={5}>
        <FilterByStatus status={['draft', 'pending', 'paid']} />

        <Stack
          direction={'row'}
          alignItems={'center'}
          borderRadius={'full'}
          padding={'1'}
          paddingRight={2}
          role={'button'}
          bg={'primary.500'}
          color={'white'}
          _hover={{
            bg: 'primary.100'
          }}
          onClick={handleCreateInvoice}
        >
          <Icon as={AiFillPlusCircle} width={10} height={10} />
          <Text color={'white'} fontSize={'xs'} fontWeight={'bold'}>
            {hidden ? 'New' : 'New Invoice'}
          </Text>
          {drawerCreateInvoiceDiclosure.isOpen && (
            <React.Suspense fallback={<Spinner size="md" />}>
              <CreateInvoice diclosure={drawerCreateInvoiceDiclosure} />
            </React.Suspense>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}
