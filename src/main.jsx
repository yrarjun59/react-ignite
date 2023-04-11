import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// REDUX SETUP
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
