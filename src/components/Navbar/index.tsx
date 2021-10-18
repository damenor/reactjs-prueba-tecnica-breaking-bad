import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useEventListener from '../../hooks/useEventListener'
import { useLockedBody } from '../../hooks/useLockedBody'

const NavbarBrand = styled(Link)`
  display: block;
  font-size: 2rem;
  text-transform: uppercase;

  img {
    height: ${({theme:{navbar}}) => navbar.height};
    width: 80px;
    /* background: rgba(255, 255, 255, 0.5); */
    backdrop-filter: blur(4px);
    /* border-radius: 8px; */
  }
  span {
    color: ${({theme:{color}}) => color.primary};
  }
`

type NavbarMenuButtonProps = {
  isMenuOpen: boolean
}

const NavbarMenuButton = styled.div<NavbarMenuButtonProps>`

  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;

  .line-menu {
    background-color: ${({theme:{color}}) => color.grey};
    border-radius: 5px;
    width: 100%;
    height: 6px;
  }

  .line-menu.line-menu--half {
    width: 50%;
  }

  .line-menu.line-menu--start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }

  .line-menu.line-menu--end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }

  ${({isMenuOpen, theme:{color}}) => isMenuOpen && `
    transform: rotate(-45deg); 
    
    .line-menu {
      background-color: ${color.danger}; 
    }

    .line-menu.line-menu--start {
      transform: rotate(-90deg) translateX(3px);
    }

    .line-menu.line-menu--end {
      transform: rotate(-90deg) translateX(-3px);
    }
  `}

`

type NavbarContainerProps = {
  isScrolled: boolean
}

const NavbarContainer = styled.nav<NavbarContainerProps>`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* height: ${({theme:{navbar}}) => navbar.height}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme:{color}, isScrolled}) => isScrolled && color.bg};
  /* padding: 0 2rem; */
  padding: 1rem;
  /* border-bottom: 1px solid ${({theme:{color}}) => color.grey500}; */
  transition: all 0.2s ease-in-out;
`

type MenuAsideProps ={
  isMenuOpen: boolean
}

const MenuAside = styled.div<MenuAsideProps>`
  z-index: 999;
  position: fixed;
  top: ${({theme:{navbar}}) => navbar.height};
  top: 0;
  left: 0;
  width: 100%;
  height: ${({theme:{navbar}}) => `calc(100vh - ${navbar.height})`};
  height: 100vh;
  background: rgba(32, 32, 32, 0.75);
  backdrop-filter: blur(8px);
  opacity: ${({isMenuOpen}) => isMenuOpen ? 1 : 0};
  visibility: ${({isMenuOpen}) => isMenuOpen ? 'visible' : 'hidden'};
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

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

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const toggleMenu = () => setIsMenuOpen(prevState => !prevState)

  const onScroll = (event: Event) => {
    window.scrollY > 80 ? !isScrolled && setIsScrolled(true) : isScrolled && setIsScrolled(false)
  }

  useEventListener('scroll', onScroll)
  useLockedBody(isMenuOpen)

  return (
    <>
      <NavbarContainer isScrolled={isScrolled && !isMenuOpen}>
        <NavbarBrand to="/">
          {/* <img src="images/logo.png" alt="app logo" /> */}
          <span>Breaking</span> Bad
        </NavbarBrand>
        <NavbarMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu}>
          <div className="line-menu line-menu--half line-menu--start"/>
          <div className="line-menu"/>
          <div className="line-menu line-menu--half line-menu--end"/>
        </NavbarMenuButton>
      </NavbarContainer>
      <MenuAside isMenuOpen={isMenuOpen}>
        <Link to="/episodies" onClick={toggleMenu}>📺 Episodios</Link>
        <Link to="/" onClick={toggleMenu}>👫 Personajes</Link>
        <Link to="/quotes" onClick={toggleMenu}>💬 Frases</Link>
      </MenuAside>
    </>
  )
}

export default Navbar
