import { useState } from 'react'

export const useCheckboxValues = initialValues => {
   const _initialValues = Array.isArray(initialValues) ? initialValues : []
   const [state, setState] = useState(_initialValues)

   const setCheckboxValues = item => {
      if (state.includes(item)) {
         setState(state.filter(element => element !== item))
      } else {
         setState([...state, item])
      }
   }

   return [state, setCheckboxValues]
}
