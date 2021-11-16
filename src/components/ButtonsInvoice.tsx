import { Button, Stack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const ButtonsInvoice = ({
  id,
  padding = 0
}: {
  id: string
  padding?: number
}) => {
  const { colorMode } = useColorMode()
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
      padding={padding}
    >
      <Button
        _hover={{
          bg: colorMode === 'dark' ? 'white' : 'texto.dark',
          color: 'texto.light'
        }}
        bg={colorMode === 'dark' ? 'bg_app.gray' : '#F9FAFE'}
        borderRadius={'3xl'}
        padding={5}
        fontSize={'xs'}
        color={colorMode === 'dark' ? 'texto.dark' : 'texto.light'}
      >
        Edit
      </Button>
      <Button
        _hover={{
          bg: 'red_custom.100'
        }}
        fontSize={'xs'}
        bg={'red_custom.500'}
        borderRadius={'3xl'}
        padding={5}
        color={'white'}
        onClick={() => console.log('ELiminado invoice: ', id)}
      >
        Delete
      </Button>
      <Button
        _hover={{
          bg: 'primary.100'
        }}
        fontSize={'xs'}
        bg={'primary.500'}
        borderRadius={'3xl'}
        padding={5}
        color={'white'}
      >
        Mark as Paid
      </Button>
    </Stack>
  )
}
