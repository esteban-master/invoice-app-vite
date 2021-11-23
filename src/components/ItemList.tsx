import React from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  Input,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { AiFillDelete } from 'react-icons/ai'
import { Item } from '../interfaces'

export const ItemList = ({ items }: { items: Item[] }) => {
  return (
    <Stack spacing={8}>
      {items.map((item) => (
        <Grid
          key={item.name}
          templateColumns={{
            base: 'repeat(6, 1fr)',
            md: 'repeat(8, 1fr)'
          }}
          columnGap={2}
          rowGap={4}
        >
          <GridItem colSpan={{ base: 6, md: 3 }}>
            <FormControl>
              <FormLabel>
                <Text>Item Name</Text>
              </FormLabel>
              <Input
                onChange={(e) => console.log(e.target.value)}
                type="text"
                value={item.name}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>
                <Text>Qty.</Text>
              </FormLabel>
              <Input
                onChange={(e) => console.log(e.target.value)}
                type="number"
                value={item.quantity}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>
                <Text>Price</Text>
              </FormLabel>
              <Input
                onChange={(e) => console.log(e.target.value)}
                type="number"
                value={item.price}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>
                <Text>Total</Text>
              </FormLabel>
              <Input
                onChange={(e) => console.log(e.target.value)}
                type="number"
                value={item.total}
              />
            </FormControl>
          </GridItem>
          <GridItem alignSelf={'end'} justifySelf={'center'}>
            <Icon cursor={'pointer'} width={7} height={7} as={AiFillDelete} />
          </GridItem>
        </Grid>
      ))}
    </Stack>
  )
}
