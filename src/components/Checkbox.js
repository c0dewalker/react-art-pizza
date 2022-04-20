import { createContext, useContext } from 'react'
import styled, { css } from 'styled-components'

import checkboxTick from '../assets/images/checkboxTick.svg'

const CheckboxGroupContext = createContext()

const useCheckboxGroupContext = () => {
    const context = useContext(CheckboxGroupContext)
    if (!context) {
        throw new Error('Use useCheckboxGroupContext within <Checkbox.Group />')
    }
    return context
}

export function Checkbox({ children }) {
    return <>{children}</>
}

Checkbox.Group = function Group({ label, selectedValues, onValueChange, children }) {
    return (
        <CheckboxGroupContext.Provider value={{ selectedValues, onValueChange }}>
            <CheckboxGroup>
                {label && <GroupTitle>{label}</GroupTitle>}
                <Checkboxes>{children}</Checkboxes>
            </CheckboxGroup>
        </CheckboxGroupContext.Provider>
    )
}

const CheckboxGroup = styled.fieldset`
    border: none;
    margin: 32px 0 0 0;
    padding: 0;
`
const GroupTitle = styled.legend`
    margin-bottom: 24px;
`
const Checkboxes = styled.ul`
    display: flex;
    gap: 16px;
    width: max-content;
`

Checkbox.Item = function Item({ value, title, subtitle }) {
    const id = `checkbox_${value}`
    const { selectedValues, onValueChange } = useCheckboxGroupContext()
    return (
        <CheckboxItem checked={selectedValues.includes(value)} onClick={() => onValueChange(value)} key={value}>
            <CheckboxTitle htmlFor={id} onClick={ev => ev.preventDefault()}>
                {title}
            </CheckboxTitle>
            <CheckboxFooter>
                <CheckboxSubtitle>{subtitle}</CheckboxSubtitle>
                <NativeCheckbox id={id} checked={selectedValues.includes(value)} onChange={() => {}} />
                <CustomCheckbox />
            </CheckboxFooter>
        </CheckboxItem>
    )
}

const CheckboxItem = styled.li`
    display: inline-block;
    position: relative;
    min-width: 112px;
    padding: 70px 12px 12px;
    border-radius: 12px;
    background-color: var(--col-white);
    color: var(--col-black);
    box-shadow: 0 8px 16px 0 rgba(75, 75, 124, 0.05);
    cursor: pointer;
    user-select: none;

    ${({ checked }) =>
        checked &&
        css`
            border: 2px solid var(--col-primary);
        `}
`

const CheckboxTitle = styled.label`
    display: block;
    margin-bottom: 14px;
    text-transform: capitalize;
    user-select: none;
`

const CheckboxFooter = styled.div`
    display: flex;
    justify-content: space-between;
`

const CheckboxSubtitle = styled.span``

const NativeCheckbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    position: absolute;
    height: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
`

const CustomCheckbox = styled.span`
    border-radius: 4px;
    border: 2px solid var(--col-grey-200);
    width: 20px;
    height: 20px;

    ${NativeCheckbox}:checked + & {
        background: url(${checkboxTick}) var(--col-primary) center no-repeat;
        border: 2px solid var(--col-primary);
    }
`
