import {
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { InvoiceId } from '../../components/InvoiceId'
import data from '../../../data.json'
import { TotalItems } from '../../components/TotalItems'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { ButtonsInvoice } from '../../components/ButtonsInvoice'
import { Status } from '../../components/Status'
export const Invoice = () => {
  const { id } = useParams()
  const invoiceData = data.find((invoice) => invoice.id === id)
  const { colorMode } = useColorMode()
  const isMobile = useBreakpointValue({ base: true, md: false })

  if (isMobile === undefined) return null
  return (
    <>
      <Stack spacing={5}>
        <Link to={'/'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Icon
              width={5}
              height={5}
              color={'primary.500'}
              as={MdOutlineKeyboardArrowLeft}
            />
            <Text variant={'bold'}>Go Back</Text>
          </Stack>
        </Link>

        <Stack
          bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
          borderRadius={'lg'}
          paddingX={{ base: 5, md: 10 }}
          paddingY={5}
        >
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack
              direction={'row'}
              width={'100%'}
              justifyContent={{ base: 'space-between', md: 'start' }}
              alignItems={'center'}
              spacing={{ md: 5 }}
            >
              <Text>Status</Text>
              <Status status={invoiceData?.status!} />
            </Stack>

            {!isMobile && <ButtonsInvoice id={invoiceData?.id!} />}
          </Stack>
        </Stack>

        <Stack
          borderRadius={'lg'}
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

            <TotalItems
              items={invoiceData?.items!}
              total={invoiceData?.total!}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
