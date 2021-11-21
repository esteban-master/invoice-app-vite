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

export const ButtonsInvoice = ({
  id,
  padding = 0
}: {
  id: string
  padding?: number
}) => {
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
        >
          Mark as Paid
        </Button>
      </Stack>
      <AlertDialogDelete diclosure={alertDeleteDiclosure} idInvoice={id} />
      {/* <CreateInvoice isOpen={} /> */}
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
                onClick={onClose}
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
