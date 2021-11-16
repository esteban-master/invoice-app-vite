import React from 'react'
import {
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Icon,
  MenuItem,
  Text,
  Checkbox,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiFillPlusCircle } from 'react-icons/ai'

export const FilterByStatus = ({ status }: { status: string[] }) => {
  const { colorMode } = useColorMode()
  const hidden = useBreakpointValue({ base: true, md: false })
  return (
    <Stack spacing={6} direction={'row'} alignItems={'center'}>
      <Menu>
        <MenuButton>
          <Stack fontWeight={'bold'} direction={'row'} alignItems={'center'}>
            <Box>{hidden ? 'Filter' : 'Filter by status'} </Box>
            <Icon
              width={5}
              height={5}
              color={'primary.500'}
              as={MdOutlineKeyboardArrowDown}
            />
          </Stack>
        </MenuButton>
        <MenuList
          marginTop={3}
          bg={colorMode === 'dark' ? 'bg_app.gray' : 'white'}
        >
          {status.map((s) => (
            <MenuItem key={s} cursor={'pointer'} as="label" htmlFor={s}>
              <Stack direction={'row'} alignItems={'center'}>
                <Checkbox
                  id={s}
                  colorScheme={'primary'}
                  iconColor="white"
                  _hover={{
                    borderColor: 'primary.500'
                  }}
                  fontWeight={'bold'}
                  bg={colorMode == 'dark' ? 'bg_app.card' : 'texto.dark'}
                  borderColor={
                    colorMode == 'dark' ? 'bg_app.card' : 'texto.dark'
                  }
                  borderRadius={'sm'}
                />
                <Text
                  color={colorMode == 'dark' ? 'white' : 'texto.bold'}
                  fontWeight={'bold'}
                  fontSize={'xs'}
                >
                  {s}
                </Text>
              </Stack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Stack
        direction={'row'}
        alignItems={'center'}
        borderRadius={'full'}
        padding={'1'}
        paddingRight={2}
        role={'button'}
        bg={'primary.500'}
        color={'white'}
        _hover={{
          bg: 'primary.100'
        }}
      >
        <Icon as={AiFillPlusCircle} width={10} height={10} />
        <Text color={'white'} fontSize={'xs'} fontWeight={'bold'}>
          {hidden ? 'New' : 'New Invoice'}
        </Text>
      </Stack>
    </Stack>
  )
}
