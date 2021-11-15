import React from 'react'
import { Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'

import { Invoice } from '../interfaces'
import { FilterByStatus } from './FilterByStatus'

export const HeaderInvoices = ({ data }: { data: Invoice[] }) => {
  const hidden = useBreakpointValue({ base: true, md: false })
  return (
    <Stack
      my={6}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Stack spacing={0}>
        <Heading fontSize={'3xl'}>Invoices</Heading>
        <Text fontSize={'xs'}>
          {' '}
          {hidden
            ? `${data.length} invoices`
            : `There are ${data.length} total invoices`}{' '}
        </Text>
      </Stack>

      <FilterByStatus status={['Draft', 'Pending', 'Paid']} />
    </Stack>
  )
}

// function CustomIcon(props: CheckboxProps) {
//   const { isIndeterminate, isChecked, ...rest } = props
//   // console.log(isChecked, isIndeterminate)
//   if (!isChecked) return null

//   return (
//     <Box as={'span'} {...rest}>
//       <Icon
//         width={'100%'}
//         height={'100%'}
//         bg={'primary.500'}
//         color={'white'}
//         as={BsCheck}
//       />
//     </Box>
//   )
// }
