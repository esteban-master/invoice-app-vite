import React, { useState } from 'react'
import { FieldArray, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { TextInput } from './TextInput'

import addDays from 'date-fns/addDays'

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
  MenuItem,
  GridItem,
  Grid,
  Icon
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { Item } from '../interfaces'
import { formatDateEs } from '../utils/formatDateEs'
import { Filters, useInvoiceContext } from '../contextInvoice'

const CreateInvoiceForm = ({ firstField, submit, discard }: any) => {
  const { colorMode } = useColorMode()
  const [status, setStatus] = useState<Filters>('draft')
  const { invoices, addNewInvoice } = useInvoiceContext()

  function handleSubmit(formik: any, status: 'draft' | 'pending') {
    setStatus(status)
    formik.submitForm()
  }

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
        },
        items: [
          {
            name: '',
            quantity: '',
            price: '',
            total: 0
          }
        ]
      }}
      validationSchema={Yup.object({
        clientName: Yup.string().required("can't be empty"),
        createdAt: Yup.string().required("can't be empty"),
        description: Yup.string().required("can't be empty"),
        paymentTerms: Yup.number().required("can't be empty"),
        clientEmail: Yup.string()
          .required("can't be empty")
          .email('Ingresa un email valido'),
        senderAddress: Yup.object({
          street: Yup.string().required("can't be empty"),
          city: Yup.string().required("can't be empty"),
          postCode: Yup.string().required("can't be empty"),
          country: Yup.string().required("can't be empty")
        }),
        clientAddress: Yup.object({
          street: Yup.string().required("can't be empty"),
          city: Yup.string().required("can't be empty"),
          postCode: Yup.string().required("can't be empty"),
          country: Yup.string().required("can't be empty")
        }),
        items: Yup.array()
          .min(1)
          .of(
            Yup.object({
              name: Yup.string().required("can't be empty"),
              quantity: Yup.number().required("can't be empty"),
              price: Yup.number().required("can't be empty"),
              total: Yup.number().required("can't be empty")
            })
          )
      })}
      onSubmit={(values) => {
        const { items, total } = values.items.reduce<{
          total: number
          items: Item[]
        }>(
          (acc, item) => {
            let newItem: Item = {
              ...item,
              quantity: Number(item.quantity),
              price: Number(item.price),
              total: Number(Number(item.price) * Number(item.quantity))
            }
            acc.items.push(newItem)
            acc.total += newItem.total
            return acc
          },
          { total: 0, items: [] }
        )
        const paymentDue = formatDateEs(
          addDays(new Date(values.createdAt), values.paymentTerms),
          'yyyy-MM-dd'
        )

        addNewInvoice({
          ...values,
          items,
          total,
          status,
          paymentDue,
          id: `RANDOM${invoices.length}`
        })
        submit()
      }}
    >
      {(formik) => (
        <Form>
          <Stack spacing={10}>
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
                    <Input
                      fontWeight={'bold'}
                      {...field}
                      bg={bg}
                      type={type}
                      ref={firstField}
                    />
                  )}
                />

                <Stack direction={'row'} spacing={5}>
                  <TextInput
                    label="City"
                    name="senderAddress.city"
                    type="text"
                    errorBottom
                  />
                  <TextInput
                    label="Post Code"
                    name="senderAddress.postCode"
                    type="text"
                    errorBottom
                  />
                  <TextInput
                    label="Country"
                    name="senderAddress.country"
                    type="text"
                    errorBottom
                  />
                </Stack>
              </Stack>

              <Stack spacing={6}>
                <Heading as="h2" fontSize={'xs'} color={'primary.500'}>
                  Bill From
                </Heading>
                <TextInput
                  label="Client's Name"
                  name="clientName"
                  type="text"
                />
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
                  <TextInput
                    label="City"
                    name="clientAddress.city"
                    type="text"
                    errorBottom
                  />
                  <TextInput
                    label="Post Code"
                    name="clientAddress.postCode"
                    type="text"
                    errorBottom
                  />
                  <TextInput
                    label="Country"
                    name="clientAddress.country"
                    type="text"
                    errorBottom
                  />
                </Stack>
                <Stack direction={'row'}>
                  <Box width={'50%'}>
                    <TextInput
                      label="Invoice Date"
                      name="createdAt"
                      type="date"
                      errorBottom
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

                  <FieldArray name="items">
                    {({ insert, remove, push }) => (
                      <Stack spacing={8}>
                        {formik.values.items.length > 0 &&
                          formik.values.items.map((item, index) => (
                            <Grid
                              key={index}
                              templateColumns={{
                                base: 'repeat(6, 1fr)',
                                md: 'repeat(10, 1fr)'
                              }}
                              columnGap={2}
                              rowGap={4}
                            >
                              <GridItem colSpan={{ base: 6, md: 3 }}>
                                <TextInput
                                  label="Item Name"
                                  name={`items.${index}.name`}
                                  type="text"
                                  errorBottom
                                />
                              </GridItem>
                              <GridItem colSpan={{ md: 2 }}>
                                <TextInput
                                  label="Qty."
                                  name={`items.${index}.quantity`}
                                  type="number"
                                  errorBottom
                                />
                              </GridItem>
                              <GridItem colSpan={2}>
                                <TextInput
                                  label="Price"
                                  name={`items.${index}.price`}
                                  type="number"
                                  errorBottom
                                />
                              </GridItem>
                              <GridItem colSpan={2}>
                                <TextInput
                                  label="Total"
                                  name={`items.${index}.total`}
                                  type="number"
                                  value={
                                    formik.getFieldProps(`items.${index}.price`)
                                      .value *
                                    formik.getFieldProps(
                                      `items.${index}.quantity`
                                    ).value
                                  }
                                />
                              </GridItem>
                              <GridItem
                                alignSelf={'end'}
                                justifySelf={'center'}
                              >
                                <Icon
                                  _hover={{
                                    color: 'red_custom.500'
                                  }}
                                  cursor={'pointer'}
                                  width={7}
                                  height={7}
                                  as={AiFillDelete}
                                  onClick={() => remove(index)}
                                />
                              </GridItem>
                            </Grid>
                          ))}

                        <Button
                          borderRadius={'3xl'}
                          leftIcon={<FaPlus />}
                          paddingY={5}
                          color={
                            colorMode === 'dark' ? 'texto.dark' : 'texto.light'
                          }
                          bg={colorMode === 'dark' ? 'bg_app.gray' : '#F9FAFE'}
                          fontSize={'xs'}
                          fontWeight={'bold'}
                          onClick={() =>
                            push({
                              name: '',
                              quantity: 0,
                              price: 0,
                              total: 0
                            })
                          }
                        >
                          Add New Item
                        </Button>
                      </Stack>
                    )}
                  </FieldArray>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Button
                onClick={discard}
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
                Discard
              </Button>
              <Stack direction={'row'}>
                <Button
                  onClick={() => handleSubmit(formik, 'draft')}
                  _hover={{
                    bg: colorMode === 'dark' ? 'bg_app.gray' : 'texto.dark',
                    color: 'white'
                  }}
                  bg={colorMode === 'dark' ? 'draft.500' : 'draft.500'}
                  borderRadius={'3xl'}
                  padding={5}
                  fontSize={'xs'}
                  color={colorMode === 'dark' ? 'texto.dark' : 'texto.light'}
                >
                  Save as Draf
                </Button>
                <Button
                  onClick={() => handleSubmit(formik, 'pending')}
                  _hover={{
                    bg: 'primary.100'
                  }}
                  fontSize={'xs'}
                  bg={'primary.500'}
                  borderRadius={'3xl'}
                  padding={5}
                  color={'white'}
                >
                  Save & Send
                </Button>
              </Stack>
            </Stack>
          </Stack>
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
