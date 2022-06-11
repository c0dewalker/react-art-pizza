export const BASE_PRICE = 200

export const defaultOptions = {
   size: '30 cm',
   dough: 'fluffy',
   sauce: 'tomato',
   cheese: ['dor blue'],
   vegetables: ['mushrooms'],
   meat: []
}

export const data = {
   sizes: [
      { value: '30 cm', price: 0 },
      { value: '35 cm', price: 50 }
   ],
   dough: [
      { value: 'fluffy', price: 0 },
      { value: 'thin', price: 0 }
   ],
   sauces: [
      { value: 'tomato', price: 0 },
      { value: 'mayonnaise', price: 0 },
      { value: 'hot', price: 0 },
      { value: 'mushrooms', price: 0 },
      { value: 'garlic', price: 0 },
      { value: 'sweet-and-sour', price: 0 },
      { value: 'mustard', price: 0 }
   ],
   cheese: [
      { value: 'mozzarella', price: 29 },
      { value: 'cheddar', price: 29 },
      { value: 'dor blue', price: 29 }
   ],
   vegetables: [
      { value: 'tomato', price: 29 },
      { value: 'mushrooms', price: 29 },
      { value: 'paprika', price: 29 }
   ],
   meat: [
      { value: 'bacon', price: 29 },
      { value: 'chicken', price: 29 },
      { value: 'ham', price: 29 }
   ]
}
