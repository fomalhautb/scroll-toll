import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StackProvider } from '@stackframe/react'
import { stackClientApp } from './stack/client.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StackProvider app={stackClientApp}>
      <App />
    </StackProvider>
  </React.StrictMode>,
)
