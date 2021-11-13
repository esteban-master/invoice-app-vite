import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

if (import.meta.env.MODE === 'development') {
  const modules = import.meta.globEager('./mocks/browser.ts')
  const { worker } = modules['./mocks/browser.ts']

  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
