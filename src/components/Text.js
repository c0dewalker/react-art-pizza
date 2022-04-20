import styled from 'styled-components'

export function Text({ children }) {
   return <>{children}</>
}

Text.SM = function SM({ children, className }) {
   return <TextSM className={className}>{children}</TextSM>
}
const TextSM = styled.p`
   font-size: 16px;
   line-height: 24px;
`

Text.XS = function XS({ children, className }) {
   return <TextXS className={className}>{children}</TextXS>
}
const TextXS = styled.p`
   font-size: 12px;
   line-height: 18px;
`
