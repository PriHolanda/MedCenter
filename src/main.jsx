import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./styles/global.css"
import NavbarSistemPatient from './components/NavbarSistemPatient/NavbarSistemPatient'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <NavbarSistemPatient/>
    </ChakraProvider>
  </React.StrictMode>,
)
