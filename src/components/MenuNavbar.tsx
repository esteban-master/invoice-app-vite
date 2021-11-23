import React from 'react'
import {
  Stack,
  Button,
  useColorMode,
  Image,
  Avatar,
  Divider,
  Box
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '/logo.svg'
import iconMoon from '/icon-moon.svg'
import iconSun from '/icon-sun.svg'
import avatar from '/image-avatar.jpg'
export const MenuNavbar = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Stack
      height={{ lg: '100%' }}
      bg={'bg_app.card'}
      as="nav"
      direction={{ lg: 'column' }}
      justifyContent={'space-between'}
      borderRightRadius={{ lg: '2xl' }}
    >
      <Stack
        padding={{ base: 5, lg: 8 }}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
        bg={'primary.500'}
        borderRightRadius={'2xl'}
      >
        <Link to="/">
          <Box
            padding={5}
            right={0}
            left={0}
            bottom={0}
            top={{ lg: '50%' }}
            position={'absolute'}
            bg={'primary.100'}
            borderBottomRightRadius={'2xl'}
            borderTopLeftRadius={'2xl'}
          ></Box>
          <Box position={'relative'}>
            <Image boxSize={{ lg: 10 }} src={logo} />
          </Box>
        </Link>
      </Stack>

      <Stack
        direction={{ base: 'row', lg: 'column' }}
        divider={<Divider orientation="vertical" borderColor={'#494E6E'} />}
      >
        <Button padding={5} variant={'link'} onClick={toggleColorMode}>
          <Image src={colorMode === 'dark' ? iconSun : iconMoon} />
        </Button>
        <Stack padding={5} placeSelf={'center'}>
          <Avatar size={'sm'} src={avatar} />
        </Stack>
      </Stack>
    </Stack>
  )
}
