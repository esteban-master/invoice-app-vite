import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { TextInput } from './TextInput'
import { ItemList } from './ItemList'
import { FaPlus } from 'react-icons/fa'
import {
  Heading,
  Input,
  Stack,
  Button,
  Box,
  useColorMode,
  FormControl,
  FormLabel,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
const CreateInvoiceForm = ({ firstField }: any) => {
  const { colorMode } = useColorMode()

  return (
    <Formik
      initialValues={{
        clientName: '',
        clientEmail: '',
        createdAt: '',
        paymentTerms: 1,
        description: '',
        senderAddress: {
          street: '',
          city: '',
          postCode: '',
          country: ''
        },
        clientAddress: {
          street: '',
          city: '',
          postCode: '',
          country: ''
        }
      }}
      validationSchema={Yup.object({
        clientName: Yup.string().required("can't be empty"),
        clientEmail: Yup.string().email('Ingresa un email valido'),
        senderAddress: Yup.object({
          street: Yup.string().required("can't be empty"),
          city: Yup.string().required("can't be empty"),
          postCode: Yup.string().required("can't be empty"),
          country: Yup.string().required("can't be empty")
        }),
        clientAddress: Yup.object({
          street: Yup.string(),
          city: Yup.string(),
          postCode: Yup.string(),
          country: Yup.string()
        })
      })}
      onSubmit={(values) => {
        console.log('jajajaj: ', values)
      }}
    >
      {(formik) => (
        <Form>
          <Stack spacing={10}>
            <Stack spacing={6}>
              <Heading as="h2" fontSize={'xs'} color={'primary.500'}>
                Bill From
              </Heading>
              <TextInput
                label="Street Address"
                name="senderAddress.street"
                type="text"
                input={({ field: { field }, type, bg }) => (
                  <Input {...field} bg={bg} type={type} ref={firstField} />
                )}
              />

              <Stack direction={'row'} spacing={5}>
                <TextInput label="City" name="senderAddress.city" type="text" />
                <TextInput
                  label="Post Code"
                  name="senderAddress.postCode"
                  type="text"
                />
                <TextInput
                  label="Country"
                  name="senderAddress.country"
                  type="text"
                />
              </Stack>
            </Stack>

            <Stack spacing={6}>
              <Heading as="h2" fontSize={'xs'} color={'primary.500'}>
                Bill From
              </Heading>
              <TextInput label="Client's Name" name="clientName" type="text" />
              <TextInput
                label="Client's Email"
                name="clientEmail"
                type="email"
              />
              <TextInput
                label="Street Address"
                name="clientAddress.street"
                type="text"
              />

              <Stack direction={'row'} spacing={5}>
                <TextInput label="City" name="clientAddress.city" type="text" />
                <TextInput
                  label="Post Code"
                  name="clientAddress.postCode"
                  type="text"
                />
                <TextInput
                  label="Country"
                  name="clientAddress.country"
                  type="text"
                />
              </Stack>
              <Stack direction={'row'}>
                <Box width={'50%'}>
                  <TextInput
                    label="Invoice Date"
                    name="createdAt"
                    type="date"
                  />
                </Box>

                <Box width={'50%'}>
                  <SelectPaymentTerms
                    items={items}
                    formik={formik}
                    label={'Payment Terms'}
                    value={formik.getFieldMeta('paymentTerms').value}
                  />
                </Box>
              </Stack>
              <TextInput
                label="Project Description"
                name="description"
                type="text"
              />
              <Stack spacing={8}>
                <Heading fontSize={'lg'} color={'#777F98'}>
                  Item List
                </Heading>

                <ItemList
                  items={[
                    {
                      name: 'Banner Design',
                      quantity: 1,
                      price: 156.0,
                      total: 156.0
                    },
                    {
                      name: 'Email Design',
                      quantity: 2,
                      price: 200.0,
                      total: 400.0
                    }
                  ]}
                />

                <Button
                  borderRadius={'3xl'}
                  leftIcon={<FaPlus />}
                  paddingY={5}
                  color={colorMode === 'dark' ? 'texto.gray' : 'texto.light'}
                  bg={colorMode === 'dark' ? 'bg_app.gray' : '#F9FAFE'}
                  fontSize={'xs'}
                  fontWeight={'bold'}
                >
                  Add New Item
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

export default CreateInvoiceForm

const items = [
  { label: 'Next 1 Day', value: 1 },
  { label: 'Next 7 Days', value: 7 },
  { label: 'Next 14 Days', value: 14 },
  { label: 'Next 30 Days', value: 30 }
]

const SelectPaymentTerms = ({ items, value, formik, label }: any) => {
  const { colorMode } = useColorMode()
  return (
    <FormControl>
      <FormLabel>
        <Text>{label}</Text>
      </FormLabel>
      <Menu>
        <MenuButton
          _hover={{
            bg: colorMode === 'dark' ? 'bg_app.card' : 'white'
          }}
          bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
          width={'100%'}
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          {items.find((item: any) => item.value === value).label ||
            items[0].label}
        </MenuButton>
        <MenuList width={'100%'}>
          {items.map((item: any) => (
            <MenuItem
              key={item.label}
              width={'100%'}
              onClick={() => {
                formik.setFieldValue('paymentTerms', item.value)
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </FormControl>
  )
}
