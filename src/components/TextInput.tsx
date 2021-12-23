import React, { LegacyRef, useRef } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import {
  FieldError,
  FieldErrors,
  UseFormRegister,
  useFormState
} from 'react-hook-form'
import { Invoice } from '../interfaces'
import { ErrorMessage as ErrorMessageHookForm } from '@hookform/error-message'

export const TextInput = ({
  label,
  input,
  name,
  type,
  register,
  errorBottom,
  errors,
  isInvalid
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
  errors: FieldErrors<Invoice>
  isInvalid: FieldError | undefined
}) => {
  const { colorMode } = useColorMode()
  const bgColor = colorMode === 'dark' ? 'bg_app.card' : 'white'

  return (
    <FormControl isInvalid={!!isInvalid}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <FormLabel>
          <Text
          // color={true ? '#EC5757' : ''}
          >
            {label}
          </Text>
        </FormLabel>
        {!errorBottom && (
          <FormErrorMessage fontSize={'xs'} color={'#EC5757'}>
            <ErrorMessageHookForm errors={errors} name={name} />
          </FormErrorMessage>
        )}
      </Stack>

      {/* {<ErrorMessageHookForm errors={errors} name={name} /> ? 'poto' : 'teta'} */}
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
          <ErrorMessageHookForm errors={errors} name={name} />
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
