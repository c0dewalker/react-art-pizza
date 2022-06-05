import styled from "styled-components";
import logoIcon from '../assets/images/Logo.svg'

export const HeaderLogo = () => (
   <LogoStyled>
      <img src={logoIcon} alt="Art Pizza logo" />
      <span>art</span>
      <span>pizza</span>
   </LogoStyled>
)

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 2.4rem;
  font-size: 1.8rem;
  
  & img {
    margin-right: 0.5rem;
  }
  
  & span:first-of-type {
    color: var(--col-primary);
    margin-right: 0.2rem;
  }
  
  & span:nth-of-type(2) {
    color: var(--col-secondary);
  }
`
