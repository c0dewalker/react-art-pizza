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

export * from './pages/PageNotFound'
export * from './pages/LoginPage'
export * from './pages/SignupPage'
export * from './pages/PizzaConstructor/PizzaConstructor'
export * from './pages/PizzaConstructor/PizzaDescription'
export * from './pages/Orders/Orders'
export * from './pages/PaymentForm'
export * from './shared/InputField'
