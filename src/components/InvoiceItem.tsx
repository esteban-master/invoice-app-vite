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
import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'
export function formatDateEs(date: string) {
  return format(new Date(date), 'dd MMM  yyyy', {
    locale: esLocale
  })
}
export const InvoiceItem = ({ invoice }: { invoice: Invoice }) => {
  const { colorMode } = useColorMode()
  const hiddenArrowRight = useBreakpointValue({ base: true, md: false })
  return (
    <Grid
      rowGap={{ base: 2, md: 0 }}
      boxShadow={'sm'}
      padding={6}
      bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
      borderRadius={'lg'}
      templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(15, 1fr)' }}
    >
      <GridItem
        marginBottom={{ base: 4, md: 0 }}
        justifySelf={'start'}
        placeSelf={{ md: 'center' }}
        colSpan={{ base: 2, md: 2 }}
        rowSpan={{ base: 2, md: 1 }}
      >
        <Text
          fontSize={'sm'}
          fontWeight={'bold'}
          color={colorMode === 'dark' ? 'white' : 'texto.bold'}
        >
          <Box as={'span'} color={'texto.light'} fontWeight={'bold'}>
            #
          </Box>
          {invoice.id}
        </Text>
      </GridItem>
      <GridItem
        justifySelf={{ base: 'end', md: 'start' }}
        placeSelf={{ md: 'center' }}
        colSpan={{ base: 2, md: 3 }}
        colStart={{ base: 3, md: 6 }}
        rowSpan={{ base: 2, md: 1 }}
      >
        <Text fontSize={'sm'}> {invoice.clientName} </Text>
      </GridItem>
      <GridItem
        alignSelf={{ base: 'end', md: 'start' }}
        placeSelf={{ md: 'center' }}
        colSpan={{ base: 2, md: 3 }}
        colStart={{ base: 1, md: 3 }}
        rowStart={{ md: 1 }}
      >
        <Text fontSize={'sm'}>
          <Box
            as={'span'}
            color={colorMode === 'dark' ? 'texto.dark' : 'texto.gray'}
          >
            Due
          </Box>{' '}
          {formatDateEs(invoice.paymentDue)}
        </Text>
      </GridItem>
      <GridItem
        alignSelf={'start'}
        placeSelf={{ md: 'center' }}
        colStart={{ base: 1, md: 9 }}
        colSpan={{ base: 2, md: 3 }}
      >
        <Text
          fontSize={'md'}
          color={colorMode === 'dark' ? 'white' : 'texto.bold'}
          fontWeight={'bold'}
        >
          &euro; 1.800.90
        </Text>
      </GridItem>
      <GridItem
        alignSelf={'center'}
        colStart={{ base: 3, md: 12 }}
        rowSpan={{ base: 2, md: 1 }}
        rowStart={{ base: 3, md: 1 }}
        colSpan={{ base: 2, md: 3 }}
      >
        <Text
          fontSize={'sm'}
          fontWeight={'bold'}
          borderRadius={'lg'}
          color={'white'}
          textAlign={'center'}
          paddingY={2}
          bg={`status.${invoice.status}`}
        >
          {invoice.status.replace(
            invoice.status[0],
            invoice.status[0].toUpperCase()
          )}
        </Text>
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
  )
}
