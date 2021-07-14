import { render, cleanup } from '@testing-library/react'
import { InputGroup } from './InputGroup'

afterEach(() => {
    cleanup()
})

describe('InputGroup', () => {
    const mockRadio = {
        type: 'radio',
        options: {
            fluffy: {
                label: 'fluffy',
                value: 'fluffy',
                category: 'bread',
                price: 0,
                defaultChecked: true
            },
            thin: {
                label: 'thin',
                value: 'thin',
                category: 'bread',
                price: 0,
                defaultChecked: false
            }
        },
        onChange: () => {}
    }

    it('renders a label if label prop passed', () => {
        const { getByTestId } = render(
            <InputGroup label="TestLabel" {...mockRadio} />
        )
        const label = getByTestId('inputGroupLabel')
        expect(label.textContent).toBe('TestLabel')
    })

    it('renders no label if no label prop passed', () => {
        const { queryByTestId } = render(
            <InputGroup label={undefined} {...mockRadio} />
        )
        const label = queryByTestId('inputGroupLabel')
        expect(label).toBe(null)
    })
})
