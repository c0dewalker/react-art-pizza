import React, { useState } from 'react'
import { data, BASE_PRICE } from './data'
import { InputGroup } from './InputGroup'
import { PizzaDescription } from './PizzaDescription'

const defaultOptions = {
    size: 'regular',
    bread: 'fluffy',
    sauce: 'tomato',
    cheese: [],
    vegetables: [],
    meat: []
}

const addToOrRemoveFromArray = (array, value) => {
    array.includes(value)
        ? array.splice(array.indexOf(value), 1)
        : array.push(value)
    return array
}

export const PizzaConstructor = () => {
    const [options, setOptions] = useState(defaultOptions)
    const [showPizzaDescription, setShowPizzaDescription] = useState(false)

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
            : value.reduce(
                  (total, ingredient) =>
                      total + data[category][ingredient].price,
                  0
              )
    }

    const price = getPrice()

    return (
        <>
            {Object.keys(options).map(category => (
                <InputGroup
                    label={category + ':'}
                    type={
                        typeof options[category] === 'string'
                            ? 'radio'
                            : 'checkbox'
                    }
                    options={data[category]}
                    onChange={handleChange}
                    key={category}
                />
            ))}
            <button onClick={() => setShowPizzaDescription(value => !value)}>
                Buy for {price} rubel
            </button>
            {showPizzaDescription && (
                <PizzaDescription options={options} data={data} />
            )}
        </>
    )
}
