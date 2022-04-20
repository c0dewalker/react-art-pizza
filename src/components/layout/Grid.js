import styled from 'styled-components'

export function Grid({ children }) {
   return <>{children}</>
}

Grid.Row = function FlexColumns({ children, className }) {
   return <FlexRow className={className}>{children}</FlexRow>
}

const FlexRow = styled.div`
   display: flex;

   & > * {
      flex: 1;
   }
`

Grid.Column = function FlexItem({ children, className }) {
   return <FlexColumn className={className}>{children}</FlexColumn>
}

const FlexColumn = styled.div`
   width: 100%;
`
