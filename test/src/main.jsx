import { createRoot } from 'react-dom/client'
import './index.css'

import {App} from './App'

import {store, persistor} from './store/store'

import {Provider} from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
)
