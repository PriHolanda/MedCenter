import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Doctors from './components/Doctors/Doctors'
import Landing from './pages/landingPage/Landing'
import Health from './components/Health/Health'

import "./styles/global.css"
import LoginMed from './pages/LoginMed/LoginMed'
import LoginPatient from './pages/LoginPatient/LoginPatient'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
