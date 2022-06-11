import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { PizzaConstructorPage } from './PizzaConstructorPage'

describe('PizzaConstructorPage', () => {
   it('renders correctly', () => {
      const { getAllByRole, getByText } = render(<PizzaConstructorPage />)

      const headings = getAllByRole('heading')
      expect(headings).toHaveLength(2)
      expect(headings[0]).toHaveTextContent('Put your pizza together')
      expect(headings[1]).toHaveTextContent('Your Pizza')

      const radioAndCheckboxGroups = getAllByRole('group')
      expect(radioAndCheckboxGroups).toHaveLength(6)

      const orderButton = getByText(/Buy for/)
      expect(orderButton).toBeInTheDocument()
   })

   it('renders the page with default options', () => {
      const defaultOptions = {
         size: '30 cm',
         dough: 'fluffy',
         sauce: 'tomato',
         cheese: ['dor blue'],
         vegetables: ['mushrooms'],
         meat: []
      }
      const { getByLabelText } = render(<PizzaConstructorPage defaultOptions={defaultOptions} />)

      const radio30cm = getByLabelText(/30 cm/)
      const radio35cm = getByLabelText(/35 cm/)
      expect(radio30cm).toBeChecked()
      expect(radio35cm).not.toBeChecked()

      const radioThinButton = getByLabelText(/thin/)
      const radioFluffyButton = getByLabelText(/fluffy/)
      expect(radioThinButton).not.toBeChecked()
      expect(radioFluffyButton).toBeChecked()

      const radioTomatoButton = getByLabelText('tomato', { selector: '[type="radio"]' })
      expect(radioTomatoButton).toBeChecked()

      const dorBleuCheckbox = getByLabelText(/dor blue/i)
      const mozzarellaCheckbox = getByLabelText(/mozzarella/i)
      const cheddarCheckbox = getByLabelText(/cheddar/i)
      expect(dorBleuCheckbox).toBeChecked()
      expect(mozzarellaCheckbox).not.toBeChecked()
      expect(cheddarCheckbox).not.toBeChecked()

      const mushroomsCheckbox = getByLabelText(/mushrooms/i, { selector: '[type="checkbox"]' })
      expect(mushroomsCheckbox).toBeChecked()

      const baconCheckbox = getByLabelText(/bacon/i)
      const chickenCheckbox = getByLabelText(/chicken/i)
      const hamCheckbox = getByLabelText(/ham/i)
      expect(baconCheckbox).not.toBeChecked()
      expect(chickenCheckbox).not.toBeChecked()
      expect(hamCheckbox).not.toBeChecked()
   })
})

