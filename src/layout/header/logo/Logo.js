import logoIcon from './Logo.svg'

export const Logo = () => (
    <div className="logo">
        <img className="logo-icon" src={logoIcon} alt="Art Pizza logo" />
        <span className="logo-text logo-text--primary">art</span>
        <span className="logo-text logo-text--secondary">pizza</span>
    </div>
)
