import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.scss'
import { store } from './store/store.tsx'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <HelmetProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </HelmetProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
