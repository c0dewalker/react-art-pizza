import styled, { css } from 'styled-components/macro'
import './Button.css'

export const Button = props => {
   return <StyledButton {...props}>{props.children}</StyledButton>
}
//@formatter:off
const StyledButton = styled.button`
   border: none;
   border-radius: 16px;
   margin-top: 1rem;
   padding: 0.75rem 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 800;
   font-size: 1.25rem;
   color: #fff;
   background-color: var(--col-primary);
   cursor: pointer;
   transition: background-color 0.2s;

   ${p =>
      p.variant !== 'ghost' &&
      !p.disabled &&
      css`
         &&:hover {
            background-color: var(--col-primary-dark);
            box-shadow: 0 0 2px 0 #4b7c33, 0 3px 4px 0 #4b7c0d;
         }
      `}

   ${p =>
      p.variant === 'ghost' &&
      css`
         color: var(--col-grey-600);
         background-color: var(--col-grey-100);
         border: 1px solid var(--col-grey-200);
         &&:hover {
            box-shadow: 0 0 2px 0 #4b4b7c33, 0 3px 4px 0 #4b4b7c0d;
         }
      `}
    
    ${p =>
      p.size === 'large' &&
      css`
         font-size: 1rem;
         padding: 1rem 1.5rem;
      `}
    
    ${({ fullWidth }) =>
      fullWidth &&
      css`
         width: 100%;
      `} 
    
    ${({ disabled }) =>
      disabled &&
      css`
         color: var(--col-grey-400);
         background-color: var(--col-grey-200);
      `}
`
//@formatter:on
