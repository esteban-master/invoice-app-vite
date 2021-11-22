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

export const FilterByStatus = ({ status }: { status: string[] }) => {
  const { colorMode } = useColorMode()
  const hidden = useBreakpointValue({ base: true, md: false })
  return (
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
                _checked={{
                  bg: 'primary.500',
                  borderColor: 'primary.500'
                }}
                _hover={{
                  borderColor: 'primary.500'
                }}
                fontWeight={'bold'}
                bg={colorMode == 'dark' ? 'bg_app.card' : 'texto.dark'}
                borderColor={colorMode == 'dark' ? 'bg_app.card' : 'texto.dark'}
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
  )
}
