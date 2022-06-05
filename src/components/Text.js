import styled, { css } from 'styled-components'
import { FONT_STYLES } from '../styles/constants'

export function Text({ children, ...props }) {
   return <StyledText {...props}>{children}</StyledText>
}

const StyledText = styled.span`
   ${({ size = 'base' }) => FONT_STYLES[size]}
   ${({ medium, bold }) =>  css` font-weight: ${medium ? 600 : bold ? 800 : 400};`}
`
