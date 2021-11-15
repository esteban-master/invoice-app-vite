import {
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import React from 'react'
import data from '../../../data.json'
import { InvoiceItem } from '../../components/InvoiceItem'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiFillPlusCircle } from 'react-icons/ai'

export const Home = () => {
  const { toggleColorMode, colorMode, setColorMode } = useColorMode()
  return (
    <Container maxWidth={{ base: 'container.sm', md: 'container.md' }}>
      <button onClick={toggleColorMode}>jajaja</button>
      <Stack
        my={6}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack spacing={0}>
          <Heading fontSize={'2xl'}>Invoices</Heading>
          <Text fontSize={'sm'}>{data.length} invoices</Text>
        </Stack>

        <Stack direction={'row'} alignItems={'center'}>
          <Text
            color={colorMode === 'dark' ? 'white' : 'texto.bold'}
            fontWeight={'bold'}
            fontSize={'sm'}
          >
            Filter
          </Text>
          <Icon
            width={5}
            height={5}
            color={'primary.500'}
            as={MdOutlineKeyboardArrowDown}
          />

          <Stack
            direction={'row'}
            alignItems={'center'}
            borderRadius={'full'}
            padding={'1'}
            paddingRight={2}
            role={'button'}
            bg={'primary.500'}
            color={'white'}
          >
            <Icon as={AiFillPlusCircle} width={10} height={10} />
            <Text color={'white'} fontSize={'sm'} fontWeight={'bold'}>
              New
            </Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={5}>
        {data.map((d) => (
          <InvoiceItem key={d.id} invoice={d} />
        ))}
      </Stack>
    </Container>
  )
}
