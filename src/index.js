import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App.jsx'
import myApp from './reducers'

let store = createStore(myApp)
let root = document.querySelector('#app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
