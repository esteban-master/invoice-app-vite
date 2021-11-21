import {
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import React from 'react'
import { Item } from '../interfaces'

export const TotalItems = ({
  items,
  total
}: {
  items: Item[]
  total: number
}) => {
  const { colorMode } = useColorMode()
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Stack
      borderRadius={'lg'}
      bg={colorMode === 'dark' ? 'bg_app.gray' : 'bg_app.light'}
    >
      {isMobile ? (
        <Stack spacing={5} padding={5}>
          {items.map((item) => (
            <Stack
              key={item.name}
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Stack>
                <Text variant={'bold'}> {item.name} </Text>
                <Text variant={'price'}>
                  {item.quantity} x &euro; {item.price}
                </Text>
              </Stack>

              <Text variant={'bold'}> &euro; {item.total} </Text>
            </Stack>
          ))}
        </Stack>
      ) : (
        <Table
          bg={colorMode === 'dark' ? 'bg_app.gray' : 'bg_app.light'}
          variant={'unstyled'}
          borderTopRadius={'lg'}
        >
          <Thead>
            <Tr>
              <Th>
                <Text
                  fontFamily={'Spartan'}
                  textTransform={'capitalize'}
                  fontWeight={'medium'}
                >
                  Item Name
                </Text>
              </Th>
              <Th>
                <Text
                  fontFamily={'Spartan'}
                  textAlign={'end'}
                  textTransform={'capitalize'}
                  fontWeight={'medium'}
                >
                  QTY.
                </Text>
              </Th>
              <Th>
                <Text
                  fontFamily={'Spartan'}
                  textAlign={'end'}
                  textTransform={'capitalize'}
                  fontWeight={'medium'}
                >
                  Price
                </Text>
              </Th>
              <Th>
                <Text
                  textAlign={'end'}
                  fontFamily={'Spartan'}
                  textTransform={'capitalize'}
                  fontWeight={'medium'}
                >
                  Total
                </Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item) => (
              <Tr key={item.name}>
                <Td>
                  <Text variant={'bold'}> {item.name} </Text>
                </Td>
                <Td>
                  <Text
                    color={colorMode === 'dark' ? 'white' : 'texto.light'}
                    textAlign={'end'}
                    fontWeight={'bold'}
                  >
                    {item.quantity}
                  </Text>
                </Td>
                <Td>
                  <Text
                    color={colorMode === 'dark' ? 'texto.dark' : 'texto.light'}
                    fontWeight={'bold'}
                    textAlign={'end'}
                  >
                    &euro; {item.price}
                  </Text>
                </Td>
                <Td>
                  <Text variant={'bold'} textAlign={'end'}>
                    &euro; {item.total}{' '}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}

      <Stack
        borderBottomRadius={'lg'}
        padding={5}
        bg={colorMode === 'dark' ? 'texto.bold' : 'draft.500'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Text color={'white'}>
          {isMobile
            ? colorMode === 'dark'
              ? 'Amount Due'
              : 'Grand Total'
            : 'Amount Due'}
        </Text>
        <Text fontSize={'xl'} color={'white'} fontWeight={'bold'}>
          &euro; {total}
        </Text>
      </Stack>
    </Stack>
  )
}
