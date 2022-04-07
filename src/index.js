import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import 'font-awesome/css/font-awesome.min.css';
// import { ChakraProvider } from '@chakra-ui/react'

import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
      <BrowserRouter>
      <App />
      </BrowserRouter>
    {/* </ChakraProvider> */}
  </React.StrictMode>,
  
  document.getElementById('root')
);


