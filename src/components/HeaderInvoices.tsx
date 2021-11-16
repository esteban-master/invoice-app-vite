import React from 'react'
import { Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { Invoice } from '../interfaces'
import { FilterByStatus } from './FilterByStatus'

export const HeaderInvoices = ({ data }: { data: Invoice[] }) => {
  const hidden = useBreakpointValue({ base: true, md: false })
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

      <FilterByStatus status={['Draft', 'Pending', 'Paid']} />
    </Stack>
  )
}
