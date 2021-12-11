import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  UseDisclosureReturn
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useInvoiceContext } from '../contextInvoice'
import { Invoice } from '../interfaces'

export const ButtonsInvoice = ({
  invoice,
  padding = 0
}: {
  invoice: Invoice
  padding?: number
}) => {
  const { markAsPaid } = useInvoiceContext()

  const alertDeleteDiclosure = useDisclosure()
  const { colorMode } = useColorMode()
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
        padding={padding}
      >
        <Button
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
          Edit
        </Button>
        <Button
          _hover={{
            bg: 'red_custom.100'
          }}
          fontSize={'xs'}
          bg={'red_custom.500'}
          borderRadius={'3xl'}
          padding={5}
          color={'white'}
          onClick={alertDeleteDiclosure.onOpen}
        >
          Delete
        </Button>
        <Button
          _hover={{
            bg: 'primary.100'
          }}
          fontSize={'xs'}
          bg={'primary.500'}
          borderRadius={'3xl'}
          padding={5}
          color={'white'}
          disabled={invoice.status === 'paid'}
          onClick={() => {
            markAsPaid(invoice.id)
          }}
        >
          Mark as Paid
        </Button>
      </Stack>
      <AlertDialogDelete
        diclosure={alertDeleteDiclosure}
        idInvoice={invoice.id}
      />
    </>
  )
}

function AlertDialogDelete({
  idInvoice,
  diclosure
}: {
  diclosure: UseDisclosureReturn
  idInvoice: string
}) {
  let navigate = useNavigate()
  const { deleteInvoice } = useInvoiceContext()
  const cancelRef = React.useRef<any>()
  const { colorMode } = useColorMode()
  function onClose() {
    diclosure.onClose()
  }
  return (
    <AlertDialog
      isOpen={diclosure.isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          margin={{ base: 5 }}
          bg={colorMode === 'dark' ? 'bg_app.card' : 'white'}
          paddingX={{ base: 2, md: 5 }}
          paddingY={{ base: 2, md: 8 }}
        >
          <AlertDialogHeader
            color={colorMode === 'dark' ? 'white' : 'texto.bold'}
            fontSize={'xl'}
          >
            Confirm Deletion
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text textAlign={'justify'}>
              Are you want to delete invoice #{idInvoice}? This action cannot be
              undone.
            </Text>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Stack direction={'row'}>
              <Button
                _hover={{
                  bg: colorMode === 'dark' ? 'white' : 'texto.dark',
                  color: 'texto.light'
                }}
                bg={colorMode === 'dark' ? 'bg_app.gray' : '#F9FAFE'}
                borderRadius={'3xl'}
                padding={5}
                fontSize={'xs'}
                color={colorMode === 'dark' ? 'texto.dark' : 'texto.light'}
                ref={cancelRef}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                _hover={{
                  bg: 'red_custom.100'
                }}
                fontSize={'xs'}
                bg={'red_custom.500'}
                borderRadius={'3xl'}
                padding={5}
                color={'white'}
                onClick={() => {
                  deleteInvoice(idInvoice)
                  navigate('/')
                  onClose()
                }}
              >
                Delete
              </Button>
            </Stack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
