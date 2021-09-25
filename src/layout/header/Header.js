import React from 'react'
import { Logo } from './logo/Logo'
import arrowBackIcon from './icn_arrow-left.svg'
import closeIcon from './icn_error.svg'
import accountIcon from './icn_account.svg'
import logoutIcon from './icn_logout.svg'
import './Header.css'

export const Header = ({
    hasArrowBack = false,
    hasLogo = false,
    rightElement = 'close', // 'close', 'account', 'logout'
    children = ''
} = {}) => (
    <header className="header">
        <div className="container">
            <div className="header-wrapper">
                <div className="leftElement">
                    {hasArrowBack && arrowBackIcon}
                    {hasLogo ? <Logo /> : children && <h1 className="h3 bold">{children}</h1>}
                </div>
                <div className="rightElement">
                    {rightElement === 'close' && <img src={closeIcon} alt="close icon" />}
                    {rightElement === 'account' && <img src={accountIcon} alt="account icon" />}
                    {rightElement === 'logout' && <img src={logoutIcon} alt="logo icon" />}
                </div>
            </div>
        </div>
    </header>
)
