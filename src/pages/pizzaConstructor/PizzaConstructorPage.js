import { useState } from 'react'
import styled from 'styled-components'

import { data, BASE_PRICE } from '../../data'
import { Header, Radio, Checkbox, Grid, PageLayout, Title } from '../../components'
import { PizzaDescription } from './PizzaDescription'
import { useCheckboxValues } from '../../hooks/useCheckboxValues'

const getIngredientPrice = (arr, ingredient) => {
   return arr?.find(({ value }) => value === ingredient)?.price ?? 0
}

export const PizzaConstructorPage = ({ defaultOptions = {}}) => {
   const [pizzaSize, setPizzaSize] = useState(defaultOptions.size)
   const [dough, setDough] = useState(defaultOptions.dough)
   const [sauce, setSauce] = useState(defaultOptions.sauce)
   const [cheese, setCheese] = useCheckboxValues(defaultOptions.cheese)
   const [vegetables, setVegetables] = useCheckboxValues(defaultOptions.vegetables)
   const [meat, setMeat] = useCheckboxValues(defaultOptions.meat)

   const getPizzaPrice = () => {
      const ingredientsData = Object.values(data).reduce((acc, group) => acc.concat(...group), [])
      const extraPrice = [pizzaSize, dough, sauce, ...cheese, ...vegetables, ...meat].reduce(
         (acc, ingredient) => acc + getIngredientPrice(ingredientsData, ingredient),
         0
      )
      return BASE_PRICE + extraPrice
   }

   return (
      <>
         <Header hasLogo={true} rightElement="account" />
         <PageLayout background="white">
            <PizzaConstructorWrapper>
               <PizzaConstructorColumn>
                  <Title level={1} size="2xl" bold>
                     Put your pizza together
                  </Title>
                  <Grid.Row>
                     <Radio.Group label="Size" value={pizzaSize} onValueChange={setPizzaSize} key="size">
                        <Radio.Item label="30 cm" value={'30 cm'} key={'30 cm'} />
                        <Radio.Item label="35 cm" value={'35 cm'} key={'35 cm'} />
                     </Radio.Group>
                     <Radio.Group label="Dough" value={dough} onValueChange={setDough} key="dough">
                        <Radio.Item label="thin" value={'thin'} key={'thin'} />
                        <Radio.Item label="fluffy" value={'fluffy'} key={'fluffy'} />
                     </Radio.Group>
                  </Grid.Row>

                  <Radio.Group label="Choose Sauce" value={sauce} onValueChange={setSauce} separatedButtons key="sauce">
                     {data.sauces.map(({ value }) => <Radio.Item label={value} value={value} key={value} />)}
                  </Radio.Group>

                  <Checkbox.Group label="Add cheese" selectedValues={cheese} onValueChange={setCheese} key="cheese">
                     {data.cheese.map(({ value, price }) => (
                        <Checkbox.Item value={value} title={value} subtitle={price + ' ₽'} key={value} />
                     ))}
                  </Checkbox.Group>

                  <Checkbox.Group
                     label="Add vegetables"
                     selectedValues={vegetables}
                     onValueChange={setVegetables}
                     key="vegetables"
                  >
                     {data.vegetables.map(({ value, price }) => (
                        <Checkbox.Item value={value} title={value} subtitle={price + ' ₽'} key={value}/>
                     ))}
                  </Checkbox.Group>

                  <Checkbox.Group label="Add meat" selectedValues={meat} onValueChange={setMeat} key="meat">
                     {data.meat.map(({ value, price }) => (
                        <Checkbox.Item value={value} title={value} subtitle={price + ' ₽'} key={value}/>
                     ))}
                  </Checkbox.Group>
               </PizzaConstructorColumn>

               <PizzaDescriptionColumn>
                  <FixedPositionWrapper>
                     <PizzaDescription
                        pizza={{ pizzaSize, dough, sauce, cheese, vegetables, meat }}
                        price={getPizzaPrice()}
                     />
                  </FixedPositionWrapper>
               </PizzaDescriptionColumn>
            </PizzaConstructorWrapper>
         </PageLayout>
      </>
   )
}

const PizzaConstructorWrapper = styled(Grid.Row)`
   position: relative;
   gap: 32px;
`

const PizzaConstructorColumn = styled(Grid.Column)`
   flex: 2;
`
const PizzaDescriptionColumn = styled(Grid.Column)`
   min-width: 350px;
`

const FixedPositionWrapper = styled.div`
   position: fixed;
   max-width: 350px;
`
