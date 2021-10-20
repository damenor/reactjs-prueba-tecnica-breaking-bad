import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from '../../hooks/contexts/useAppContext'

import { CSSToggleVisibility } from '../../styles/utils/CSSToggleVisibility'
import NavbarMenuLanguage from './NavbarMenuLanguage'

type NavbarMenuLinkType = { 
  path: string, 
  label: string 
}

type NavbarMenuStyledProps = {
  isOpen: boolean
}

type NavbarMenuProps = {
  isOpen: boolean
  onClickLink?: () => void
}

const NavbarMenuContainer = styled.div<NavbarMenuStyledProps>`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: rgba(32, 32, 32, 0.75);
  backdrop-filter: blur(8px);

  ${({isOpen}) => CSSToggleVisibility(isOpen)}

  a {
    color: ${({theme:{color}}) => color.light};
    font-size: 3rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      color: ${({theme:{color}}) => color.secondary};
    }
    &:active {
      transform: scale(0.96);
    }
  }
`

const NavbarMenu = ({ isOpen, onClickLink }: NavbarMenuProps) => {

  const { labels: { navbar } } = useAppContext()

  return (
    <NavbarMenuContainer isOpen={isOpen}>
      { navbar.links.map(({ path, label }: NavbarMenuLinkType, index: number) => (
        <Link key={`${index}-${path}`} to={path} onClick={onClickLink}>{label}</Link>
      )) }
      <NavbarMenuLanguage options={[{ value: 'en', label: 'EN' }, { value: 'es', label: 'ES' }]}/>
    </NavbarMenuContainer>
  )
}

export default NavbarMenu
