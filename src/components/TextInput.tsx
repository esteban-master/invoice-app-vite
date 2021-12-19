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
  value,
  errorBottom
}: {
  label: string
  type: string
  errorBottom?: boolean
  input?: ({
    field
  }: {
    field: Partial<FieldProps>
    bg: string
    type: string
  }) => void
  name: string
  value?: number | string
}) => {
  const { colorMode } = useColorMode()
  const bgColor = colorMode === 'dark' ? 'bg_app.card' : 'white'
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <FormControl isInvalid={!!meta.error && meta.touched}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <FormLabel>
                <Text color={meta.error && meta.touched ? '#EC5757' : ''}>
                  {label}
                </Text>
              </FormLabel>
              {!errorBottom && (
                <FormErrorMessage fontSize={'xs'} color={'#EC5757'}>
                  {meta.error}
                </FormErrorMessage>
              )}
            </Stack>

            {input ? (
              <>{input({ field: { field }, bg: bgColor, type })}</>
            ) : (
              <Input
                fontWeight={'bold'}
                type={type}
                bg={bgColor}
                {...field}
                disabled={label === 'Total'}
                value={value}
              />
            )}
            {errorBottom && (
              <FormErrorMessage fontSize={'xs'} color={'#EC5757'}>
                {meta.error}
              </FormErrorMessage>
            )}
          </FormControl>
        )
      }}
    </Field>
  )
}
