import React, { useState } from 'react'
import { data, BASE_PRICE } from './data'
import { InputGroup } from './InputGroup'
import { Header } from './layout/header/Header'
import { useHistory } from 'react-router-dom'
import { PizzaDescription } from './PizzaDescription'
import { Screen } from './layout/Screen'
import { Section } from './layout/Section'

const defaultOptions = {
    size: 'regular',
    bread: 'fluffy',
    sauce: 'tomato',
    cheese: [],
    vegetables: [],
    meat: []
}

const addToOrRemoveFromArray = (array, value) => {
    array.includes(value) ? array.splice(array.indexOf(value), 1) : array.push(value)
    return array
}

export const PizzaConstructor = () => {
    const [options, setOptions] = useState(defaultOptions)
    const history = useHistory()

    const handleChange = ev => {
        const { name, value, type } = ev.target
        type === 'radio'
            ? setOptions({ ...options, [name]: value })
            : setOptions({
                  ...options,
                  [name]: addToOrRemoveFromArray(options[name], value)
              })
    }

    const getPrice = () => {
        const extraPrice = Object.entries(options).reduce(
            (extraPrice, option) => extraPrice + getPriceOfCategory(option),
            0
        )
        return BASE_PRICE + extraPrice
    }

    const getPriceOfCategory = ([category, value]) => {
        return typeof value === 'string'
            ? data[category][value].price
            : value.reduce((total, ingredient) => total + data[category][ingredient].price, 0)
    }

    const price = getPrice()

    return (
        <>
            <Header hasLogo={true} rightElement="account" />
            <Screen>
                <Section>
                    {Object.keys(options).map(category => (
                        <InputGroup
                            label={category + ':'}
                            type={typeof options[category] === 'string' ? 'radio' : 'checkbox'}
                            options={data[category]}
                            onChange={handleChange}
                            key={category}
                        />
                    ))}
                    <PizzaDescription options={options} data={data} />
                    <button className="btn btn-primary" onClick={() => history.push('/checkout')}>
                        Buy for {price} rubel
                    </button>
                </Section>
            </Screen>
        </>
    )
}
