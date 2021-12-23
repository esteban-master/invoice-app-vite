import React, { useState } from 'react'
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
import { Invoice } from '../interfaces'
import { formatDateEs } from '../utils/formatDateEs'
import { useInvoiceContext } from '../contextInvoice'
import { useFieldArray, useForm, useWatch } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object({
  clientName: Yup.string().required("can't be empty"),
  createdAt: Yup.string().required("can't be empty"),
  description: Yup.string().required("can't be empty"),
  paymentTerms: Yup.number().required("can't be empty"),
  clientEmail: Yup.string()
    .required("can't be empty")
    .email('Please enter a valid email'),
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
        quantity: Yup.number()
          .typeError('should be a number')
          .min(1, 'minimum 1')
          .required("can't be empty"),
        price: Yup.number()
          .typeError('should be a number')
          .required("can't be empty"),
        total: Yup.number().required("can't be empty")
      })
    )
})

const CreateInvoiceForm = ({ firstField, submit, discard }: any) => {
  const { colorMode } = useColorMode()
  const { invoices, addNewInvoice } = useInvoiceContext()
  const {
    register,
    handleSubmit,
    getValues,
    control,
    setValue,
    formState: { isValid, errors }
  } = useForm<Invoice>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      paymentTerms: 1,
      items: [{ name: '', price: 100, quantity: 1, total: 0 }]
    }
  })

  const fieldArray = useFieldArray({
    control,
    name: 'items'
  })

  function submitForm(values: Invoice) {
    const { total } = values.items.reduce<{
      total: number
    }>(
      (acc, item) => {
        acc.total += Number(item.total)
        return acc
      },
      { total: 0 }
    )
    const paymentDue = formatDateEs(
      addDays(new Date(values.createdAt), values.paymentTerms),
      'yyyy-MM-dd'
    )

    addNewInvoice({
      ...values,
      total,
      paymentDue,
      id: `RANDOM${invoices.length}`
    })
    submit()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
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
                register={register}
                errors={errors}
                isInvalid={errors.senderAddress?.street}
                input={({ name, register, type, bg }) => (
                  <Input
                    fontWeight={'bold'}
                    {...register(name)}
                    bg={bg}
                    type={type}
                  />
                )}
              />

              <Stack direction={'row'} spacing={5}>
                <TextInput
                  label="City"
                  name="senderAddress.city"
                  type="text"
                  register={register}
                  errors={errors}
                  isInvalid={errors.senderAddress?.city}
                  errorBottom
                />

                <TextInput
                  label="Post Code"
                  name="senderAddress.postCode"
                  type="text"
                  register={register}
                  errors={errors}
                  isInvalid={errors.senderAddress?.postCode}
                  errorBottom
                />
                <TextInput
                  label="Country"
                  name="senderAddress.country"
                  type="text"
                  register={register}
                  isInvalid={errors.senderAddress?.country}
                  errors={errors}
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
                register={register}
                isInvalid={errors.clientName}
                errors={errors}
              />
              <TextInput
                label="Client's Email"
                name="clientEmail"
                type="email"
                register={register}
                isInvalid={errors.clientEmail}
                errors={errors}
              />
              <TextInput
                label="Street Address"
                name="clientAddress.street"
                type="text"
                register={register}
                errors={errors}
                isInvalid={errors.clientAddress?.street}
              />

              <Stack direction={'row'} spacing={5}>
                <TextInput
                  label="City"
                  name="clientAddress.city"
                  type="text"
                  register={register}
                  errors={errors}
                  isInvalid={errors.clientAddress?.city}
                  errorBottom
                />
                <TextInput
                  label="Post Code"
                  name="clientAddress.postCode"
                  type="text"
                  register={register}
                  errors={errors}
                  isInvalid={errors.clientAddress?.postCode}
                  errorBottom
                />
                <TextInput
                  label="Country"
                  name="clientAddress.country"
                  type="text"
                  register={register}
                  errors={errors}
                  isInvalid={errors.clientAddress?.country}
                  errorBottom
                />
              </Stack>
              <Stack direction={'row'}>
                <Box width={'50%'}>
                  <TextInput
                    label="Invoice Date"
                    name="createdAt"
                    type="date"
                    register={register}
                    errors={errors}
                    isInvalid={errors.createdAt}
                    errorBottom
                  />
                </Box>

                <Box width={'50%'}>
                  {/* <SelectPaymentTerms
                    items={items}
                    label={'Payment Terms'}
                    control={control}
                    setValue={(value: number) =>
                      setValue('paymentTerms', value)
                    }
                  /> */}
                </Box>
              </Stack>
              <TextInput
                label="Project Description"
                name="description"
                register={register}
                errors={errors}
                isInvalid={errors.description}
                type="text"
              />
              <Stack spacing={8}>
                <Heading fontSize={'lg'} color={'#777F98'}>
                  Item List
                </Heading>

                {fieldArray.fields.map((field, index) => (
                  <Stack key={field.id} spacing={8}>
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
                          register={register}
                          errors={errors}
                          isInvalid={
                            errors.items ? errors?.items[index].name : undefined
                          }
                          errorBottom
                        />
                      </GridItem>
                      <GridItem colSpan={{ md: 2 }}>
                        <TextInput
                          label="Qty."
                          name={`items.${index}.quantity`}
                          type="number"
                          register={register}
                          errors={errors}
                          isInvalid={
                            errors.items
                              ? errors?.items[index].quantity
                              : undefined
                          }
                          errorBottom
                        />
                      </GridItem>
                      <GridItem colSpan={2}>
                        <TextInput
                          label="Price"
                          name={`items.${index}.price`}
                          type="number"
                          register={register}
                          errors={errors}
                          isInvalid={
                            errors.items
                              ? errors?.items[index].price
                              : undefined
                          }
                          errorBottom
                        />
                      </GridItem>
                      <GridItem colSpan={2}>
                        <TextInput
                          label="Total"
                          name={`items.${index}.total`}
                          type="number"
                          register={register}
                          errors={errors}
                          isInvalid={
                            errors.items
                              ? errors?.items[index].total
                              : undefined
                          }
                          input={({ name, register, bg: bgColor, type }) => {
                            const watch = useWatch({
                              control,
                              name: `items.${index}`
                            })
                            React.useEffect(() => {
                              setValue(
                                `items.${index}.total`,
                                Number(
                                  Number(watch.price) * Number(watch.quantity)
                                )
                              )
                            }, [watch.price, watch.quantity])
                            return (
                              <Input
                                fontWeight={'bold'}
                                type={type}
                                bg={bgColor}
                                {...register(name)}
                                disabled
                              />
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem alignSelf={'end'} justifySelf={'center'}>
                        <Icon
                          _hover={{
                            color: 'red_custom.500'
                          }}
                          cursor={'pointer'}
                          width={7}
                          height={7}
                          as={AiFillDelete}
                          onClick={() => fieldArray.remove(index)}
                        />
                      </GridItem>
                    </Grid>
                  </Stack>
                ))}
                <Button
                  borderRadius={'3xl'}
                  leftIcon={<FaPlus />}
                  paddingY={5}
                  color={colorMode === 'dark' ? 'texto.dark' : 'texto.light'}
                  bg={colorMode === 'dark' ? 'bg_app.gray' : '#F9FAFE'}
                  fontSize={'xs'}
                  fontWeight={'bold'}
                  onClick={() =>
                    fieldArray.append({
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
                onClick={() => setValue('status', 'draft')}
                type="submit"
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
                type="submit"
                onClick={() => setValue('status', 'pending')}
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
      </form>
    </div>
  )
}

export default CreateInvoiceForm

const items = [
  { label: 'Next 1 Day', value: 1 },
  { label: 'Next 7 Days', value: 7 },
  { label: 'Next 14 Days', value: 14 },
  { label: 'Next 30 Days', value: 30 }
]

const SelectPaymentTerms = ({ items, control, setValue, label }: any) => {
  const { colorMode } = useColorMode()
  const valuepaymentTerms = useWatch({
    control,
    name: 'paymentTerms'
  })

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
          {items.find((item: any) => item.value === valuepaymentTerms).label ||
            items[0].label}
        </MenuButton>
        <MenuList width={'100%'}>
          {items.map((item: any) => (
            <MenuItem
              key={item.label}
              width={'100%'}
              onClick={() => {
                setValue(item.value)
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
