import {
  Box,
  Grid,
  GridItem,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { InvoiceId } from '../../components/InvoiceId'
import data from '../../../data.json'
import { TotalItems } from '../../components/TotalItems'

export const Invoice = () => {
  const { id } = useParams()
  const invoiceData = data.find((invoice) => invoice.id === id)
  const { colorMode } = useColorMode()
  return (
    <Stack>
      <Stack
        borderRadius={'xl'}
        spacing={5}
        bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
        padding={{ base: 5, md: 10 }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 5, md: 0 }}
          justifyContent={{ base: 'start', md: 'space-between' }}
        >
          <Stack spacing={0}>
            <InvoiceId id={id!} />
            <Text fontSize={'xs'}>{invoiceData?.description}</Text>
          </Stack>
          <Stack spacing={0} marginY={6}>
            <Text>{invoiceData?.senderAddress?.street}</Text>
            <Text>{invoiceData?.senderAddress?.city}</Text>
            <Text>{invoiceData?.senderAddress?.postCode}</Text>
            <Text>{invoiceData?.senderAddress?.country}</Text>
          </Stack>
        </Stack>

        <Stack spacing={10}>
          <Grid
            rowGap={8}
            templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)' }}
          >
            <GridItem colSpan={{ base: 2, md: 2 }}>
              <Stack>
                <Text> Invoice Date </Text>
                <Text fontSize={'sm'} variant={'bold'}>
                  21 Aug 2021
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 2 }} rowSpan={{ base: 2 }}>
              <Stack>
                <Text> Bill To </Text>
                <Text fontSize={'sm'} variant={'bold'}>
                  {invoiceData?.clientName}
                </Text>
              </Stack>
              <Stack marginY={2} spacing={0}>
                <Text>{invoiceData?.clientAddress?.street}</Text>
                <Text>{invoiceData?.clientAddress?.city}</Text>
                <Text>{invoiceData?.clientAddress?.postCode}</Text>
                <Text>{invoiceData?.clientAddress?.country}</Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 2 }}>
              <Text>Payment Due</Text>
              <Text fontSize={'sm'} variant={'bold'}>
                20 Sep 2021
              </Text>
            </GridItem>
            <GridItem
              colSpan={{ base: 4, md: 2 }}
              colStart={{ md: 5 }}
              rowStart={{ md: 1 }}
            >
              <Text>Sent to</Text>
              <Text fontSize={'sm'} variant={'bold'}>
                {invoiceData?.clientEmail}
              </Text>
            </GridItem>
          </Grid>

          <TotalItems items={invoiceData?.items!} total={invoiceData?.total!} />
        </Stack>
      </Stack>
    </Stack>
  )
}
