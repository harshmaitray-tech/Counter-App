import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'   // <-- store import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>   {/* <-- Yahan Provider me store pass karo */}
      <App />
    </Provider>
  </React.StrictMode>,
)
