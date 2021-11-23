import { Field, Form, Formik, FieldProps } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Router from './Routes.routes'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { TextInput } from './components/TextInput'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}

      <Router />

      {/* <Formik
        initialValues={{
          name: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string().max(5, 'Solo 5 caracteres').required('Required')
        })}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(props) => {
          console.log('Props: ', props)
          return (
            <Form>
              <Field name="name">
                {({ field, form, meta }: FieldProps) => {
                  console.log('field: ', field, form, meta)
                  return (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input {...field} id="name" />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <TextInput label="Name" name="name" type="text" />
              <FormControl
                isInvalid={!!(props.touched.name && props.errors.name)}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...props.getFieldProps('name')} id="name" />
                <FormErrorMessage>{props.errors.name}</FormErrorMessage>
              </FormControl>
            </Form>
          )
        }}
      </Formik> */}
    </QueryClientProvider>
  )
}

export default App
