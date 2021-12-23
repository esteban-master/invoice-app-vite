import React from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { Invoice } from '../interfaces'

export const TextInput = ({
  label,
  input,
  name,
  type,
  register,
  errorBottom,
  error
}: {
  label: string
  type: string
  errorBottom?: boolean
  input?: (props: {
    name: any
    register: UseFormRegister<Invoice>
    bg: string
    type: string
  }) => void
  name: any
  register: UseFormRegister<Invoice>
  error: FieldError | undefined
}) => {
  const { colorMode } = useColorMode()
  const bgColor = colorMode === 'dark' ? 'bg_app.card' : 'white'

  return (
    <FormControl isInvalid={!!error}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <FormLabel>
          <Text color={!!error ? '#EC5757' : ''}>{label}</Text>
        </FormLabel>
        {!errorBottom && (
          <FormErrorMessage fontSize={'xs'} color={'#EC5757'}>
            {error && <>{error.message}</>}
          </FormErrorMessage>
        )}
      </Stack>

      {input ? (
        <>{input({ name, register, bg: bgColor, type })}</>
      ) : (
        <Input
          fontWeight={'bold'}
          type={type}
          bg={bgColor}
          {...register(name)}
        />
      )}
      {errorBottom && (
        <FormErrorMessage fontSize={'xs'} color={'#EC5757'}>
          {error && <>{error.message}</>}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
