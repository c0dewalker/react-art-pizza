import styled from 'styled-components'

import { Text } from '../../components/Text'

import plate from '../../assets/images/plate.png'

export const PizzaDescription = ({ pizza }) => {
   const { pizzaSize, dough, sauce, cheese, vegetables, meat } = pizza
   const ingredients = [...cheese, ...vegetables, ...meat].reduce((acc, ingredient) => acc + ` • ${ingredient}`, '')

   return (
      <>
         <Pizza>
            <Plate src={plate}></Plate>
         </Pizza>
         <PizzaTitle>Your Pizza</PizzaTitle>
         <Text.SM>
            {pizzaSize} on {dough} dough
         </Text.SM>
         <Text.SM>
            {sauce} sauce {ingredients}
         </Text.SM>
      </>
   )
}

const Pizza = styled.div``

const Plate = styled.img`
   display: block;
   width: 100%;
   height: auto;
`

const PizzaTitle = styled.h2`
   margin: 24px 0 8px 0;
   color: var(--col-black);
   font-weight: 600;
`
