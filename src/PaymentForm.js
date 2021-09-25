import React from 'react'
import { Screen } from './layout/Screen'
import { Header } from './layout/header/Header'
import { InputField } from './'
import { Divider } from './layout/Devider'
import './PaymentForm.css'

export const PaymentForm = () => {
    return (
        <>
            <Header>Complete your order</Header>
            <Screen>
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
            </Screen>
        </>
    )
}
