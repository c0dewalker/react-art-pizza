import styled from 'styled-components'

import { HeaderLogo } from './HeaderLogo'
import arrowBackIcon from '../assets/icons/icn_arrow-left.svg'
import closeIcon from '../assets/icons/icn_error.svg'
import accountIcon from '../assets/icons/icn_account.svg'
import logoutIcon from '../assets/icons/icn_logout.svg'
import './Header.css'

export const Header = ({
    hasArrowBack = false,
    hasLogo = false,
    rightElement = 'close', // 'close', 'account', 'logout'
    children = ''
} = {}) => (
    <StyledHeader>
            <HeaderWrapper>
                <div className="leftElement">
                    {hasArrowBack && arrowBackIcon}
                    {hasLogo ? <HeaderLogo /> : children && <h1 className="h3 bold">{children}</h1>}
                </div>
                <RightHeaderElement>
                    {rightElement === 'close' && <img src={closeIcon} alt="close icon" />}
                    {rightElement === 'account' && <img src={accountIcon} alt="account icon" />}
                    {rightElement === 'logout' && <img src={logoutIcon} alt="logo icon" />}
                </RightHeaderElement>
            </HeaderWrapper>
    </StyledHeader>
)

const StyledHeader = styled.header`
    position: sticky;
    background-color: var(--col-white);
    top: 0;
    width: 100%;
    box-shadow: 0 0 2px 0 #2E313726, 0 3px 4px 0 #2E31370D;
    z-index: 2;
`

const HeaderWrapper = styled.div`
    min-height: 3.5rem;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
`
const RightHeaderElement = styled.div`
    margin-left: auto;
`
