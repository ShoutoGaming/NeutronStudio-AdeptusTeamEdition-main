import React from 'react'
import Tab from '@/components/Tab';
import Login from './screens/Login';
import * as ReactDOM from 'react-dom/client';
import App from './App'
import '../samples/node-api'
import '../assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Tab />
    <App />
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
