import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Doctors from './components/Doctors/Doctors'
import Landing from './pages/landingPage/Landing'
import Health from './components/Health/Health'

import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Landing/>
    </ChakraProvider>
  </React.StrictMode>,
)
