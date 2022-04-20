import { PizzaConstructorPage } from './pages/pizzaConstructor/PizzaConstructorPage'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, SignupPage, OrdersPage, PageNotFound } from './'
import { CheckoutPage } from './pages/checkout/CheckoutPage'

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
               <OrdersPage />
            </Route>
            <Route path="/checkout">
               <CheckoutPage />
            </Route>
            <Route exact path="/">
               <PizzaConstructorPage />
            </Route>
            <Route>
               <PageNotFound />
            </Route>
         </Switch>
      </>
   )
}
