import {Header, InputField, Divider, PageLayout, Title} from '../../components'

export const CheckoutPage = () => {
   return (
      <>
         <Header>Complete your order</Header>
         <PageLayout>
            <Title level={2}>Address</Title>
            <InputField type="text" placeholder="Enter your address" />

            <div className="flex-row">
               <InputField label="House" />
               <InputField label="Floor" />
               <InputField label="Apartment" />
            </div>
            <Divider />

            <Title level={2}>Payment</Title>
            <InputField type="text" placeholder="Card number" />

            <div className="flex-row space-between">
               <InputField className="card-expiration" type="text" placeholder="MM/YYYY" />
               <InputField className="card-cvv" type="text" placeholder="CVV" />
            </div>
            <InputField type="text" placeholder="Name" />
            <Divider />
         </PageLayout>
      </>
   )
}
