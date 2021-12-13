import React from 'react'
import { Stack, Image, Heading, Text } from '@chakra-ui/react'

import { InvoiceItem } from './InvoiceItem'
import empty from '/illustration-empty.svg'
import { useInvoiceContext } from '../contextInvoice'

const Invoices = () => {
  const { invoices, filters } = useInvoiceContext()
  return (
    <>
      {invoices.length > 0 ? (
        <Stack spacing={5}>
          {filters.length > 0
            ? invoices
                .filter((invoice) => filters.includes(invoice.status))
                .map((invoice) => (
                  <InvoiceItem key={invoice.id} invoice={invoice} />
                ))
            : invoices.map((invoice) => (
                <InvoiceItem key={invoice.id} invoice={invoice} />
              ))}
        </Stack>
      ) : (
        <Stack
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          marginY={24}
          marginX={'auto'}
          spacing={10}
          maxWidth={60}
        >
          <Image width={48} src={empty} />
          <Stack direction={'column'} alignItems={'center'}>
            <Heading fontSize={'xl'} as="h2">
              There is nothing here
            </Heading>
            <Text textAlign={'center'} fontSize={'xs'}>
              Create an invoice by cliking the New button and get started
            </Text>
          </Stack>
        </Stack>
      )}
    </>
  )
}

export default Invoices
