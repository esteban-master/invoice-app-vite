import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const MenuNavbar = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={toggleColorMode}>jajaja</button>
        </li>
      </ul>
    </nav>
  )
}
