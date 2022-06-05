import styled from 'styled-components'

export const PageLayout = ({ children, background = '#f9f9fb' }) => (
   <Main background={background}>
      <PageBoundaries>{children}</PageBoundaries>
   </Main>
)

const Main = styled.main`
   flex-grow: 1;
   background-color: ${p => p.background};
`

const PageBoundaries = styled.div`
   max-width: 1024px;
   padding: 32px;
   margin: 0 auto;
`
