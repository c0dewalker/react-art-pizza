import React, { useRef } from 'react'
import styled from 'styled-components/macro'
import { nanoid } from 'nanoid'

export const InputField = React.forwardRef((props, ref) => {
   const { type = 'text', label, className, success, invalid, errorMessage, ...restProps } = props
   const id = useRef(nanoid())

   return (
      <Wrapper>
         {label && (
            <label className="text-sm" htmlFor={id}>
               {label}
            </label>
         )}
         <Input ref={ref} type={type} id={id} {...restProps} />
         {invalid && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
   )
})

const Wrapper = styled.div`
   &:not(:first-of-type) {
      margin-top: 1rem;
   }
`
const Input = styled.input`
   display: block;
   width: 100%;
   border: 2px solid var(--col-grey-200);
   border-radius: 0.5rem;
   padding: 0.75em;
   outline: none;

   &:focus {
      border-color: var(--col-grey-400);
   }

   &:invalid {
      color: var(--col-error);
      border-color: var(--col-error);
   }

   &::placeholder {
      color: var(--col-grey-400);
      vertical-align: middle;
   }
`

const ErrorMessage = styled.span`
   color: var(--col-error);
   margin-top: calc(0.15rem + 0.25 * var(--padding));
`
