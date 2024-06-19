import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import {store} from './redux/store';
import { Provider } from 'react-redux'


const customTheme = extendTheme({
  components: {
    Accordion: {
      baseStyle: {
        container: {
        bg: "#ffff",
          borderRadius: "md",
        },
        button: {
          _expanded: {
            bg: "#319795",
            color: "white",
          },
          fontSize: "lg",
          fontWeight: "bold",
        },
        panel: {
          bg: "gray.50",
          p: 4,
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ShopContextProvider>
  <Provider store={store}>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider> 
  </Provider>
  // </ShopContextProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
