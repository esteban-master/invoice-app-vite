import { Stack } from '@chakra-ui/react'
import React from 'react'
import data from '../../../data.json'
import { HeaderInvoices } from '../../components/HeaderInvoices'
import { InvoiceItem } from '../../components/InvoiceItem'

export const Home = () => {
  return (
    <>
      <HeaderInvoices data={data} />
      <Stack spacing={5}>
        {data.map((d) => (
          <InvoiceItem key={d.id} invoice={d} />
        ))}
      </Stack>
    </>
  )
}
