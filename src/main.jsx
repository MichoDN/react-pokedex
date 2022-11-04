import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'

import './css/home.css'
import './index.css'
import './css/login.css'
import './css/pokemons.css'
import './css/pokemonCard.css'
import './css/pokemonDetails.css'
import './css/mediaQuery.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
