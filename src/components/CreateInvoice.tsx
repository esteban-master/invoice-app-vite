import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useColorMode,
  UseDisclosureReturn
} from '@chakra-ui/react'
import { MenuNavbar } from './MenuNavbar'
export const CreateInvoice = ({
  dicloruse
}: {
  dicloruse: UseDisclosureReturn
}) => {
  const firstField = React.useRef<any>()
  const { colorMode } = useColorMode()
  return (
    <Drawer
      isOpen={dicloruse.isOpen}
      placement="left"
      initialFocusRef={firstField}
      onClose={dicloruse.onClose}
      size={'lg'}
    >
      <DrawerOverlay />
      <DrawerContent bg={colorMode === 'dark' ? 'bg_app.dark' : 'white'}>
        <Stack direction={'row'}>
          <MenuNavbar />

          <Stack>
            <DrawerCloseButton />
            <DrawerHeader>New Invoice</DrawerHeader>
            <DrawerBody>Form</DrawerBody>
            <DrawerFooter>Footer</DrawerFooter>
          </Stack>
        </Stack>
      </DrawerContent>
    </Drawer>
  )
}
