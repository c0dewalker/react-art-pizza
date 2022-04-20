import styled from 'styled-components'

export const Section = ({ children, className }) => <StyledSection className={className}>{children}</StyledSection>

const StyledSection = styled.div`
   background: #fff;
   border-radius: 1rem;
   padding: 1rem;
`
