import React from 'react'
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  UseDisclosureReturn
} from '@chakra-ui/react'
export const CreateInvoice = ({
  dicloruse
}: {
  dicloruse: UseDisclosureReturn
}) => {
  const firstField = React.useRef<any>()
  return (
    <Drawer
      isOpen={dicloruse.isOpen}
      placement="left"
      initialFocusRef={firstField}
      onClose={dicloruse.onClose}
      size={'md'}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>New Invoice</DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
