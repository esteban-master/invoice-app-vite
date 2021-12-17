import React from 'react'
import { Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import CreateInvoiceForm from '../../components/CreateInvoiceForm'

const CreateInvoicePage = () => {
  let navigate = useNavigate()
  return (
    <Stack spacing={5}>
      <Link to={'/'}>
        <Stack direction={'row'} alignItems={'center'}>
          <Icon
            width={5}
            height={5}
            color={'primary.500'}
            as={MdOutlineKeyboardArrowLeft}
          />
          <Text variant={'bold'}>Go Back</Text>
        </Stack>
      </Link>

      <Heading variant={'h1'}>New Invoice</Heading>
      <CreateInvoiceForm
        submit={() => navigate('/')}
        discard={() => navigate('/')}
      />
    </Stack>
  )
}

export default CreateInvoicePage
