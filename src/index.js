import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles/base.css'
import './styles/styles.css'

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
)

export * from './PageNotFound'
export * from './InputGroup'
export * from './Login'
export * from './Signup'
export * from './PizzaConstructor'
export * from './PizzaDescription'
export * from './Orders'
export * from './PaymentForm'
export * from './shared/InputField'
