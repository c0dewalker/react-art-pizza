import { createContext, useContext } from 'react'
import styled, { css } from 'styled-components'

const RadioContext = createContext()

const useRadioContext = () => {
   const context = useContext(RadioContext)
   if (!context) {
      throw new Error('Use useRadioContext within <RadioGroup />')
   }
   return context
}

export function Radio({ children }) {
   return <>{children}</>
}

Radio.Group = function RadioGroup({ label, value, onValueChange, children, separatedButtons }) {
   return (
      <RadioGroupWrapper>
         <RadioContext.Provider value={{ selectedValue: value, onValueChange, separatedButtons }}>
            {label && <GroupTitle>{label}</GroupTitle>}
            <RadioButtons separatedButtons={separatedButtons}>{children}</RadioButtons>
         </RadioContext.Provider>
      </RadioGroupWrapper>
   )
}

const RadioGroupWrapper = styled.fieldset`
   border: none;
   user-select: none;
   margin: 32px 0 0 0;
   padding: 0;
`

const GroupTitle = styled.legend`
   margin-bottom: 8px;
`

const RadioButtons = styled.div`
   display: inline-block;
   background-color: var(--col-grey-100);
   border-radius: 14px;
   padding: 2px;

   ${p =>
      p.separatedButtons &&
      css`
         background-color: var(--col-white);
         display: flex;
         flex-wrap: wrap;
         gap: 8px;

         & label {
            border: 2px solid var(--col-grey-200);
         }
      `}
`

Radio.Item = function RadioItem({ label, value }) {
   const { selectedValue, onValueChange, separatedButtons } = useRadioContext()
   return (
      <RadioItemWrapper checked={value === selectedValue} separatedButtons={separatedButtons} key={value}>
         {label ? label : ''}
         <input
            type="radio"
            value={value}
            checked={value === selectedValue}
            onChange={() => {
               onValueChange(value)
            }}
            key={value}
         />
      </RadioItemWrapper>
   )
}

const RadioItemWrapper = styled.label`
   display: inline-block;
   padding: 10px 18px;
   border-radius: 12px;
   cursor: pointer;

   ${p =>
      p.checked &&
      css`
         text-shadow: 0.03em 0 0;
         color: var(--col-black);
         background-color: var(--col-white);
         box-shadow: 0 0 2px 0 #4b4b7c33, 0 3px 4px 0 #4b4b7c0d;
      `}
   ${p =>
      p.checked &&
      p.separatedButtons &&
      css`
         border: 2px solid var(--col-primary) !important;
         box-shadow: none;
      `}
  & input {
      display: none;
   }
`
