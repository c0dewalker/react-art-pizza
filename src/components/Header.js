import styled from 'styled-components'

import { HeaderLogo } from './HeaderLogo'
import { Title } from './Title'
import arrowBackIcon from '../assets/icons/icn_arrow-left.svg'
import closeIcon from '../assets/icons/icn_error.svg'
import accountIcon from '../assets/icons/icn_account.svg'
import logoutIcon from '../assets/icons/icn_logout.svg'

export const Header = ({
   hasArrowBack = false,
   hasLogo = false,
   rightElement = 'close', // 'close', 'account', 'logout'
   children = ''
} = {}) => (
   <StyledHeader>
      <div>
         {hasArrowBack && arrowBackIcon}
         {hasLogo && <HeaderLogo />}
      </div>
      {children && (<Title level={1} bold>{children}</Title>
      )}
      <div>
         {rightElement === 'close' && <img src={closeIcon} alt="close icon" />}
         {rightElement === 'account' && <img src={accountIcon} alt="account icon" />}
         {rightElement === 'logout' && <img src={logoutIcon} alt="logo icon" />}
      </div>
   </StyledHeader>
)

const StyledHeader = styled.header`
   position: sticky;
   background-color: var(--col-white);
   top: 0;
   width: 100%;
   box-shadow: 0 0 2px 0 #2e313726, 0 3px 4px 0 #2e31370d;
   z-index: 2;
   min-height: 4.5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 2rem;
`
