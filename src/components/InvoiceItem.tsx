import { Stack, Text, Box, useColorMode } from '@chakra-ui/react'
import React from 'react'
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
  return (
    <Stack
      boxShadow={'sm'}
      padding={6}
      spacing={7}
      borderRadius={'lg'}
      bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
    >
      <Stack justifyContent={'space-between'} direction={'row'}>
        <Text
          color={colorMode === 'dark' ? 'white' : 'texto.bold'}
          fontWeight={'extrabold'}
          fontSize={'base'}
        >
          <Box as={'span'} color={'texto.light'} fontWeight={'bold'}>
            #
          </Box>
          {invoice.id}
        </Text>
        <Text fontSize={'sm'}> {invoice.clientName} </Text>
      </Stack>
      <Stack
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'row'}
        height={'47'}
      >
        <Stack>
          <Text fontSize={'sm'}>
            <Box
              as={'span'}
              color={colorMode === 'dark' ? 'texto.dark' : 'texto.gray'}
            >
              Due
            </Box>{' '}
            {formatDateEs(invoice.paymentDue)}{' '}
          </Text>
          <Box
            fontWeight={'bold'}
            color={colorMode === 'dark' ? 'white' : 'texto.bold'}
            fontSize={'xl'}
          >
            <Box as={'span'}>&euro;</Box> {invoice.total}{' '}
          </Box>
        </Stack>
        <Stack
          paddingY={1}
          width={'104px'}
          borderRadius={'lg'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          bg={`status.${invoice.status}`}
        >
          <Box color={`white`} as={'span'} fontSize={'x-large'}>
            &bull;
          </Box>
          <Text color={`white`} fontSize={'base'} fontWeight={'bold'}>
            {invoice.status.replace(
              invoice.status[0],
              invoice.status[0].toUpperCase()
            )}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}

function getColor(status: 'paid' | 'pending' | 'draft' | string) {
  if (status === 'paid') {
    return 'green'
  } else if (status === 'pending') {
    return 'orange'
  } else {
    return 'gray'
  }
}
