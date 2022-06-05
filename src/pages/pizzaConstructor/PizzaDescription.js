import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button, Text, Title } from '../../components'
import plate from '../../assets/images/plate.png'

export const PizzaDescription = ({ pizza, price }) => {
   const { pizzaSize, dough, sauce, cheese, vegetables, meat } = pizza
   const ingredients = [...cheese, ...vegetables, ...meat].reduce((acc, ingredient) => acc + ` • ${ingredient}`, '')

   const history = useHistory()
   const navigateToCheckout = () => history.push('/checkout')

   return (
      <>
         <PizzaPlate src={plate}></PizzaPlate>
         <PizzaTitle>Your Pizza</PizzaTitle>
         <Text size="sm">
            {pizzaSize} on {dough} dough{' '}
         </Text>
         <Text size="sm">
            {sauce} sauce {ingredients}
         </Text>
         <OrderButton primary onClick={navigateToCheckout}>
            Buy for {price} rubel
         </OrderButton>
      </>
   )
}

const PizzaPlate = styled.img`
   display: block;
   width: 100%;
   height: auto;
`

const PizzaTitle = styled(Title)`
   margin: 24px 0 8px 0;
`

const OrderButton = styled(Button)`
   margin-top: 32px;
`
