import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import reportWebVitals from './reportWebVitals'

import './styles/style.scss'

import Home from "./pages/Home"

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()