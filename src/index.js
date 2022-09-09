import React from 'react'
import ReactDOM from 'react-dom/client'
import '@kelvininc/react-ui-components/assets/fonts/font-proxima-nova.css'
//import { initialize, StyleMode } from '@kelvininc/react-ui-components'

import './styles/app.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
