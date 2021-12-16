import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorMode,
  UseDisclosureReturn,
  DrawerCloseButton
} from '@chakra-ui/react'
import { MenuNavbar } from './MenuNavbar'

import CreateInvoiceForm from './CreateInvoiceForm'

const CreateInvoice = ({ diclosure }: { diclosure: UseDisclosureReturn }) => {
  const firstField = React.useRef<any>()
  const { colorMode } = useColorMode()
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })
  return (
    <Drawer
      isOpen={diclosure.isOpen}
      placement="left"
      initialFocusRef={firstField}
      onClose={diclosure.onClose}
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
              <DrawerCloseButton />
              <DrawerHeader>New Invoice</DrawerHeader>
              <DrawerBody>
                <CreateInvoiceForm
                  firstField={firstField}
                  submit={() => diclosure.onClose()}
                />
              </DrawerBody>
              <DrawerFooter>Footer</DrawerFooter>
            </GridItem>
          </Grid>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default CreateInvoice
