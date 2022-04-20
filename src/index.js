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
export * from './pages/login/LoginPage'
export * from './pages/signup/SignupPage'
export * from './pages/pizzaConstructor/PizzaConstructorPage'
export * from './pages/pizzaConstructor/PizzaDescription'
export * from './pages/orders/OrdersPage'
export * from './pages/checkout/CheckoutPage'
export * from './components/InputField'
