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

export const TextInput = ({ label, ...props }: any) => {
  const { colorMode } = useColorMode()
  return (
    <Field name={props.name}>
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
          <Input
            bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
            errorBorderColor="#EC5757"
            {...field}
            {...props}
          />
        </FormControl>
      )}
    </Field>
  )
}
