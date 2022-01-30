import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { data, BASE_PRICE } from '../../data'
import { HorizontalContainer } from '../../layout/HorizontalContainer'
import { Header } from '../../layout/header/Header'
import { Grid } from '../../shared/Grid'
import { Main } from '../../layout/Main'
import { Radio } from '../../shared/Radio'
import { Checkbox } from '../../shared/Checkbox'
import { Button } from '../../shared/Button'
import { PizzaDescription } from './PizzaDescription'
import { useCheckboxValues } from '../../hooks/useCheckboxValues'

const defaultOptions = {
    size: '30 cm',
    dough: 'fluffy',
    sauce: 'tomato',
    cheese: ['dor blue'],
    vegetables: ['mushrooms'],
    meat: []
}
const getIngredientPrice = (arr, ingredient) => {
    return arr?.find(({ value }) => value === ingredient)?.price ?? 0
}

export const PizzaConstructor = () => {
    const [pizzaSize, setPizzaSize] = useState(defaultOptions.size)
    const [dough, setDough] = useState(defaultOptions.dough)
    const [sauce, setSauce] = useState(defaultOptions.sauce)
    const [cheese, setCheese] = useCheckboxValues(defaultOptions.cheese)
    const [vegetables, setVegetables] = useCheckboxValues(defaultOptions.vegetables)
    const [meat, setMeat] = useCheckboxValues(defaultOptions.meat)

    const history = useHistory()

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
            <Main>
                <HorizontalContainer>
                    <PizzaConstructorWrapper>
                        <LeftColumn>
                            <h1>Put your pizza together</h1>
                            <Grid.Row>
                                <Radio.Group label="Size" value={pizzaSize} onValueChange={setPizzaSize}>
                                    <Radio.Item label="30 cm" value={'30 cm'} />
                                    <Radio.Item label="35 cm" value={'35 cm'} />
                                </Radio.Group>
                                <Radio.Group label="Dough" value={dough} onValueChange={setDough}>
                                    <Radio.Item label="thin" value={'thin'} />
                                    <Radio.Item label="fluffy" value={'fluffy'} />
                                </Radio.Group>
                            </Grid.Row>

                            <Radio.Group
                                label="Choose Sauce"
                                value={sauce}
                                onValueChange={setSauce}
                                separatedButtons
                            >
                                {data.sauces.map(sauce => (
                                    <Radio.Item label={sauce.value} value={sauce.value} />
                                ))}
                            </Radio.Group>

                            <Checkbox.Group label="Add cheese" selectedValues={cheese} onValueChange={setCheese}>
                                {data.cheese.map(({ value, price }) => (
                                    <Checkbox.Item value={value} title={value} subtitle={price + ' ₽'} />
                                ))}
                            </Checkbox.Group>

                            <Checkbox.Group
                                label="Add vegetables"
                                selectedValues={vegetables}
                                onValueChange={setVegetables}
                            >
                                {data.vegetables.map(({ value, price }) => (
                                    <Checkbox.Item value={value} title={value} subtitle={price + ' ₽'} />
                                ))}
                            </Checkbox.Group>

                            <Checkbox.Group label="Add meat" selectedValues={meat} onValueChange={setMeat}>
                                {data.meat.map(({ value, price }) => (
                                    <Checkbox.Item value={value} title={value} subtitle={price + ' ₽'} />
                                ))}
                            </Checkbox.Group>
                        </LeftColumn>

                        <RightColumn>
                            <FixedPositionWrapper>
                                <PizzaDescription
                                    pizza={{ pizzaSize, dough, sauce, cheese, vegetables, meat }}
                                    data={data}
                                />
                                <OrderButton primary onClick={() => history.push('/checkout')}>
                                    Buy for {getPizzaPrice()} rubel
                                </OrderButton>
                            </FixedPositionWrapper>
                        </RightColumn>
                    </PizzaConstructorWrapper>
                </HorizontalContainer>
            </Main>
        </>
    )
}

const PizzaConstructorWrapper = styled(Grid.Row)`
    padding: 32px 71px;
    position: relative;
    gap: 32px;
`

const LeftColumn = styled(Grid.Column)`
    flex: 2;
`
const RightColumn = styled(Grid.Column)`
    min-width: 350px;
`

const FixedPositionWrapper = styled.div`
    position: fixed;
    max-width: 350px;
`

const OrderButton = styled(Button)`
    margin-top: 32px;
`
