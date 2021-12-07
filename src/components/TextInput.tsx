import React from 'react'
import { Field, FieldProps } from 'formik'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'

export const TextInput = ({
  label,
  input,
  name,
  type,
  ...props
}: {
  label: string
  type: string
  input?: ({
    field
  }: {
    field: Partial<FieldProps>
    bg: string
    type: string
  }) => void
  name: string
}) => {
  const { colorMode } = useColorMode()
  const bgColor = colorMode === 'dark' ? 'bg_app.card' : 'white'
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <FormControl isInvalid={!!meta.error && meta.touched}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <FormLabel>
              <Text color={meta.error && meta.touched ? '#EC5757' : ''}>
                {label}
              </Text>
            </FormLabel>
            <FormErrorMessage fontSize={'xs'} color={'#EC5757'}>
              {meta.error}
            </FormErrorMessage>
          </Stack>

          {input ? (
            <>{input({ field: { field }, bg: bgColor, type })}</>
          ) : (
            <Input type={type} bg={bgColor} {...field} {...props} />
          )}
        </FormControl>
      )}
    </Field>
  )
}
