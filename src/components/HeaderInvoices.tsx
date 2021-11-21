import React from 'react'
import {
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Icon,
  useDisclosure
} from '@chakra-ui/react'
import { Invoice } from '../interfaces'
import { FilterByStatus } from './FilterByStatus'
import { AiFillPlusCircle } from 'react-icons/ai'
import { CreateInvoice } from './CreateInvoice'
export const HeaderInvoices = ({ data }: { data: Invoice[] }) => {
  const hidden = useBreakpointValue({ base: true, md: false })
  const drawerCreateInvoiceDiclosure = useDisclosure()
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
            ? data.length > 0
              ? `${data.length} invoices`
              : 'No invoices'
            : data.length > 0
            ? `There are ${data.length} total invoices`
            : 'No invoices'}
        </Text>
      </Stack>

      <Stack direction={'row'} spacing={5}>
        <FilterByStatus status={['Draft', 'Pending', 'Paid']} />

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
          onClick={drawerCreateInvoiceDiclosure.onOpen}
        >
          <Icon as={AiFillPlusCircle} width={10} height={10} />
          <Text color={'white'} fontSize={'xs'} fontWeight={'bold'}>
            {hidden ? 'New' : 'New Invoice'}
          </Text>
        </Stack>
      </Stack>

      <CreateInvoice dicloruse={drawerCreateInvoiceDiclosure} />
    </Stack>
  )
}
