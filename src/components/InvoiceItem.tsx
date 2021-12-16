import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {
  Grid,
  GridItem,
  useBreakpointValue,
  Text,
  Box,
  useColorMode,
  Icon
} from '@chakra-ui/react'
import { Invoice } from '../interfaces'
import { Link } from 'react-router-dom'
import { InvoiceId } from './InvoiceId'
import { Status } from './Status'
import { formatDateEs } from '../utils/formatDateEs'

export const InvoiceItem = ({ invoice }: { invoice: Invoice }) => {
  const { colorMode } = useColorMode()
  const hiddenArrowRight = useBreakpointValue({ base: true, md: false })
  return (
    <Link to={`/invoice/${invoice.id}`}>
      <Grid
        rowGap={{ base: 2, md: 0 }}
        boxShadow={'sm'}
        paddingY={4}
        paddingX={{ base: 4, md: 0 }}
        bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
        borderRadius={'lg'}
        templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(15, 1fr)' }}
        cursor={'pointer'}
      >
        <GridItem
          marginBottom={{ base: 4, md: 0 }}
          justifySelf={'start'}
          placeSelf={{ md: 'center' }}
          colSpan={{ base: 2, md: 2 }}
          rowSpan={{ base: 2, md: 1 }}
        >
          <InvoiceId id={invoice.id} />
        </GridItem>
        <GridItem
          justifySelf={{ base: 'end', md: 'start' }}
          placeSelf={{ md: 'center' }}
          colSpan={{ base: 2, md: 3 }}
          colStart={{ base: 3, md: 6 }}
          rowSpan={{ base: 2, md: 1 }}
        >
          <Text> {invoice.clientName} </Text>
        </GridItem>
        <GridItem
          alignSelf={{ base: 'end', md: 'start' }}
          placeSelf={{ md: 'center' }}
          colSpan={{ base: 2, md: 3 }}
          colStart={{ base: 1, md: 3 }}
          rowStart={{ md: 1 }}
        >
          <Text>
            <Box
              as={'span'}
              color={colorMode === 'dark' ? 'texto.dark' : 'texto.gray'}
            >
              Due
            </Box>{' '}
            {formatDateEs(new Date(invoice.paymentDue), 'dd MMM yyyy')}
          </Text>
        </GridItem>
        <GridItem
          alignSelf={'start'}
          placeSelf={{ md: 'center' }}
          colStart={{ base: 1, md: 9 }}
          colSpan={{ base: 2, md: 3 }}
        >
          <Text fontSize={'sm'} variant={'bold'}>
            &euro; {invoice.total}
          </Text>
        </GridItem>
        <GridItem
          alignSelf={'center'}
          marginLeft={5}
          colStart={{ base: 3, md: 12 }}
          rowSpan={{ base: 2, md: 1 }}
          rowStart={{ base: 3, md: 1 }}
          colSpan={{ base: 2, md: 3 }}
        >
          <Status status={invoice.status} />
        </GridItem>
        <GridItem hidden={hiddenArrowRight} placeSelf={'center'}>
          <Icon
            width={7}
            height={7}
            color={'primary.500'}
            as={MdOutlineKeyboardArrowRight}
          />
        </GridItem>
      </Grid>
    </Link>
  )
}
