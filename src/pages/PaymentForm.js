import { Main } from '../layout/Main'
import { Header } from '../layout/header/Header'
import { InputField } from '../index'
import { Divider } from '../layout/Devider'
import '../styles/PaymentForm.css'

export const PaymentForm = () => {
    return (
        <>
            <Header>Complete your order</Header>
            <Main>
                <div className="container">
                    <h2 className="address-heading h4">Address</h2>

                    <InputField type="text" placeholder="Enter your address" />

                    <div className="flex-row">
                        <InputField label="House" />
                        <InputField label="Floor" />
                        <InputField label="Apartment" />
                    </div>
                    <Divider />

                    <h2 className="h4">Payment</h2>
                    <InputField type="text" placeholder="Card number" />

                    <div className="flex-row space-between">
                        <InputField className="card-expiration" type="text" placeholder="MM/YYYY" />
                        <InputField className="card-cvv" type="text" placeholder="CVV" />
                    </div>
                    <InputField type="text" placeholder="Name" />
                    <Divider />
                </div>
            </Main>
        </>
    )
}
