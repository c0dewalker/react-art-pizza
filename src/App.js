import { PizzaConstructor } from './pages/PizzaConstructor/PizzaConstructor'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, SignupPage, Orders, PageNotFound } from './'
import { PaymentForm } from './pages/PaymentForm'

export const App = () => {
    return (
        <>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/checkout">
                    <PaymentForm />
                </Route>
                <Route exact path="/">
                    <PizzaConstructor />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </>
    )
}
