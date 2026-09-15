import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Route as IndexRoute } from './routes/index'

const IndexComponent = IndexRoute.options.component || (() => null)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IndexComponent />
  </React.StrictMode>,
)
