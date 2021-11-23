import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
  Icon,
  useBreakpointValue,
  useColorMode,
  UseDisclosureReturn,
  Button,
  FormErrorMessage
} from '@chakra-ui/react'
import { MenuNavbar } from './MenuNavbar'
import { ItemList } from './ItemList'
import { FaPlus } from 'react-icons/fa'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { TextInput } from './TextInput'

export const CreateInvoice = ({
  dicloruse
}: {
  dicloruse: UseDisclosureReturn
}) => {
  const firstField = React.useRef<any>()
  const { colorMode } = useColorMode()
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })
  return (
    <Drawer
      isOpen={dicloruse.isOpen}
      placement="left"
      initialFocusRef={firstField}
      onClose={dicloruse.onClose}
      size={'lg'}
    >
      <DrawerOverlay>
        <DrawerContent
          bg={colorMode === 'dark' ? 'bg_app.dark' : 'white'}
          borderRightRadius={'2xl'}
          overflowY={'auto'}
        >
          <Grid templateColumns={{ lg: '103px repeat(4, 1fr)' }}>
            {isDesktop && (
              <GridItem>
                <MenuNavbar />
              </GridItem>
            )}

            <GridItem colSpan={{ lg: 4 }}>
              <DrawerHeader>New Invoice</DrawerHeader>
              <DrawerBody>
                <Formik
                  initialValues={{
                    clientName: '',
                    clientEmail: '',
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
                    console.log(values)
                  }}
                >
                  {(props) => (
                    <Form>
                      <Stack spacing={10}>
                        <Stack spacing={6}>
                          <Heading
                            as="h2"
                            fontSize={'xs'}
                            color={'primary.500'}
                          >
                            Bill From
                          </Heading>
                          <TextInput
                            label="Street Address"
                            name="senderAddress.street"
                            type="text"
                          />

                          <Stack direction={'row'} spacing={5}>
                            <TextInput
                              label="City"
                              name="senderAddress.city"
                              type="text"
                            />
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
                          <Heading
                            as="h2"
                            fontSize={'xs'}
                            color={'primary.500'}
                          >
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
                            />
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
                          <Stack direction={'row'} spacing={5}>
                            <FormControl>
                              <FormLabel>
                                <Text>Invoice Date</Text>
                              </FormLabel>
                              <Input type="date" />
                            </FormControl>
                            <FormControl>
                              <FormLabel>
                                <Text>Payment Terms</Text>
                              </FormLabel>
                              <Input type="text" />
                            </FormControl>
                          </Stack>
                          <FormControl>
                            <FormLabel>
                              <Text>Project Description</Text>
                            </FormLabel>
                            <Input type="text" />
                          </FormControl>

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
                              color={
                                colorMode === 'dark'
                                  ? 'texto.gray'
                                  : 'texto.light'
                              }
                              bg={
                                colorMode === 'dark' ? 'bg_app.gray' : '#F9FAFE'
                              }
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
              </DrawerBody>
              <DrawerFooter>Footer</DrawerFooter>
            </GridItem>
          </Grid>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
