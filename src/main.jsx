import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider>
        <App />
    </ChakraProvider>
  </React.StrictMode>
)
