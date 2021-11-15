import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/spartan/700.css'
import '@fontsource/spartan/500.css'
import theme from '../theme'

// if (import.meta.env.MODE === 'development') {
//   const modules = import.meta.globEager('./mocks/browser.ts')
//   const { worker } = modules['./mocks/browser.ts']

//   worker.start()
// }

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
)
