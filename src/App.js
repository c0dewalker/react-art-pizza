import { PizzaConstructor } from './PizzaConstructor'
import { Switch, Route } from 'react-router-dom'
import { Login, Signup, Orders, PageNotFound } from './'
import { PaymentForm } from './PaymentForm'

export const App = () => {
    return (
        <>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
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
