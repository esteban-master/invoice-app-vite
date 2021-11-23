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
    initialColorMode: 'dark',
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
      card: '#1E2139',
      gray: '#252945'
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

    paid: {
      100: 'rgba(51,214,159, 0.15)',
      500: '#33D69F'
    },
    pending: {
      100: 'rgba(255,143,0, 0.15)',
      500: '#FF8F00'
    },
    draft: {
      100: 'rgba(55,59,83, 0.15)',
      500: '#373B53'
    }
  },
  fonts: {
    body: 'Spartan'
  },
  components: {
    Text: {
      baseStyle: (props) => ({
        color: mode('texto.light', 'texto.dark')(props),
        fontSize: 'xs'
      }),
      variants: {
        bold: (props) => ({
          fontWeight: 'bold',
          color: mode('texto.bold', 'white')(props)
        }),
        price: (props) => ({
          fontWeight: 'bold',
          color: mode('texto.light', 'texto.gray')(props)
        }),
        table: (props) => ({
          fontFamily: 'Spartan',
          textTransform: 'capitalize',
          fontWeight: 'medium',
          color: mode('texto.light', 'white')(props)
        })
      }
    },
    Heading: {
      baseStyle: (props) => ({
        color: mode('texto.bold', 'white')(props)
      })
    }
  }
}

export default extendTheme(theme)
