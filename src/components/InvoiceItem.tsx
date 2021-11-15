import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import {
  Grid,
  GridItem,
  useBreakpointValue,
  Text,
  Box,
  useColorMode,
  Icon,
  Stack
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
      paddingY={4}
      paddingX={2}
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
          fontSize={'xs'}
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
        <Text fontSize={'xs'}> {invoice.clientName} </Text>
      </GridItem>
      <GridItem
        alignSelf={{ base: 'end', md: 'start' }}
        placeSelf={{ md: 'center' }}
        colSpan={{ base: 2, md: 3 }}
        colStart={{ base: 1, md: 3 }}
        rowStart={{ md: 1 }}
      >
        <Text fontSize={'xs'}>
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
          fontSize={'sm'}
          color={colorMode === 'dark' ? 'white' : 'texto.bold'}
          fontWeight={'bold'}
        >
          &euro; 1.800.90
        </Text>
      </GridItem>
      <GridItem
        alignSelf={'center'}
        marginLeft={5}
        colStart={{ base: 3, md: 12 }}
        rowSpan={{ base: 2, md: 1 }}
        rowStart={{ base: 3, md: 1 }}
        colSpan={{ base: 2, md: 3 }}
        bg={`${invoice.status}.100`}
        borderRadius={'lg'}
      >
        <Stack
          direction={'row'}
          spacing={0}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Icon
            width={9}
            height={9}
            color={`${
              invoice.status === 'draft'
                ? colorMode === 'dark'
                  ? 'texto.dark'
                  : 'texto.bold'
                : `${invoice.status}.500`
            }`}
            as={BsDot}
          />
          <Text
            fontSize={'xs'}
            fontWeight={'bold'}
            color={`${
              invoice.status === 'draft'
                ? colorMode === 'dark'
                  ? 'texto.dark'
                  : 'texto.bold'
                : `${invoice.status}.500`
            }`}
            textAlign={'center'}
            paddingY={3}
            paddingRight={3}
          >
            {invoice.status.replace(
              invoice.status[0],
              invoice.status[0].toUpperCase()
            )}
          </Text>
        </Stack>
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
