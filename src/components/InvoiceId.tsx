import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const InvoiceId = ({ id }: { id: string }) => {
  return (
    <Text fontSize={'xs'} variant={'bold'}>
      <Box as={'span'} color={'texto.light'} fontWeight={'bold'}>
        #
      </Box>
      {id}
    </Text>
  )
}
