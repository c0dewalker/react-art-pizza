import styled from 'styled-components'

export const Main = ({ children, className }) => <StyledMain className={className}>{children}</StyledMain>

const StyledMain = styled.main`
    flex-grow: 1;
`
