import React from 'react'
import { Stack, Image, Heading, Text } from '@chakra-ui/react'
import data from '../../../data.json'
import { HeaderInvoices } from '../../components/HeaderInvoices'
import { InvoiceItem } from '../../components/InvoiceItem'
import empty from '/illustration-empty.svg'
import { Layout } from '../../components/Layout'

export const Home = () => {
  return (
    <Layout>
      <HeaderInvoices data={data} />
      {data.length > 0 ? (
        <Stack spacing={5}>
          {data.map((d) => (
            <InvoiceItem key={d.id} invoice={d} />
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
    </Layout>
  )
}
