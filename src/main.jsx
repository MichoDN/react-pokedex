import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import store from "./store"

import { Provider } from 'react-redux'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
