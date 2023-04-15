import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// REDUX SETUP
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
		      <App />
      </BrowserRouter>
    </Provider>
	</React.StrictMode>
)

