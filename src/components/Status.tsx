import React from 'react'
import { Icon, Stack, Text, useColorMode } from '@chakra-ui/react'
import { BsDot } from 'react-icons/bs'

export const Status = ({ status }: { status: string }) => {
  const { colorMode } = useColorMode()
  return (
    <Stack
      borderRadius={'lg'}
      direction={'row'}
      spacing={0}
      justifyContent={'center'}
      alignItems={'center'}
      bg={`${status}.100`}
    >
      <Icon
        width={9}
        height={9}
        color={`${
          status === 'draft'
            ? colorMode === 'dark'
              ? 'texto.dark'
              : 'texto.bold'
            : `${status}.500`
        }`}
        as={BsDot}
      />
      <Text
        fontWeight={'bold'}
        color={`${
          status === 'draft'
            ? colorMode === 'dark'
              ? 'texto.dark'
              : 'texto.bold'
            : `${status}.500`
        }`}
        textAlign={'center'}
        paddingY={3}
        paddingRight={3}
        textTransform={'capitalize'}
      >
        {status}
      </Text>
    </Stack>
  )
}
