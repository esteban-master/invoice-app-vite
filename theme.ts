import { extendTheme, ChakraTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme: Partial<ChakraTheme> = {
  styles: {
    global: (props) => ({
      body: {
        bg: mode('bg_app.light', 'bg_app.dark')(props)
      }
    })
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    primary: {
      100: '#9277FF',
      500: '#7C5DFA'
    },
    bg_app: {
      light: '#F8F8FB',
      dark: '#141625',
      card: '#1E2139'
    },
    texto: {
      gray: '#888EB0',
      light: '#7E88C3',
      dark: '#DFE3FA',
      bold: '#0C0E16'
    },
    red_custom: {
      100: '#FF9797',
      500: '#EC5757'
    },
    status: {
      paid: '#33D69F',
      pending: '#FF8F00',
      draft: '#373B53'
    }
  },
  fonts: {
    body: 'Spartan'
  },
  components: {
    Text: {
      baseStyle: (props) => ({
        color: mode('texto.light', 'texto.dark')(props)
      })
    },
    Heading: {
      baseStyle: (props) => ({
        color: mode('texto.bold', 'white')(props)
      })
    }
  }
}

export default extendTheme(theme)
