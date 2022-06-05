import styled, { css } from 'styled-components'
import { FONT_STYLES } from '../styles/constants'

export function Title({ children, level = 1, ...props }) {
    const component = `h${level}`
    return <Heading as={component} {...props}>{children}</Heading>
}

const Heading = styled.h1`
   ${({ size = 'xl' }) => FONT_STYLES[size]}
   ${({ bold }) =>  css` font-weight: ${bold ? 800 : 600};`}
  color: var(--col-black);
`
